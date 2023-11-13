import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <Image src="/images/clear-nav-logo.png" width="300px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
            {currentUser ? ([
              <Nav.Link id="add-stuff-nav" as={NavLink} to="/rent" key="add">Container Rental</Nav.Link>,
              <Nav.Link id="list-stuff-nav" as={NavLink} to="/return" key="list">Container Return</Nav.Link>,
            ]) : ''}
            {currentUser && !Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <Nav.Link id="order-history" as={NavLink} to="/history/:_id" key="history">Order History</Nav.Link>
            ) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <NavDropdown id="admin-history-dropdown" title="View Transactions (Admin)">
                <NavDropdown.Item id="user-history-dropdown-admin" as={NavLink} to="/adminhistory">
                  Admin History
                </NavDropdown.Item>
                <NavDropdown.Item id="order-history" as={NavLink} to="/history/:_id">
                  Personal Order History
                </NavDropdown.Item>
              </NavDropdown>
            ) : ''}
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link id="faqs" as={NavLink} to="/faqs" key="faqs">FAQs</Nav.Link>
            <Nav.Link id="about" as={NavLink} to="/about" key="about">About Us</Nav.Link>
            {currentUser === '' ? (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" as={NavLink} to="/signin">
                  <PersonFill />
                  Sign
                  in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" as={NavLink} to="/signup">
                  <PersonPlusFill />
                  Sign
                  up
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="navbar-current-user" title={currentUser}>
                <NavDropdown.Item id="navbar-sign-out" as={NavLink} to="/signout">
                  <BoxArrowRight />
                  {' '}
                  Sign
                  out
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
