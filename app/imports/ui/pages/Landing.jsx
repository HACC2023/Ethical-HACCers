import React from 'react';
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-3">
    <Row xs={1} lg={2} className="justify-content-center">
      <Col className="py-3">
        <Container className="rounded-5 landing">
          <Row className="justify-content-center p-4">
            <Button as={NavLink} to="/rent" variant="outline-light" size="lg" className="w-80 rounded-5 landing-buttons"><p className="large-button-text">Rent A Container</p></Button>
          </Row>
          <Row className="justify-content-center p-4">
            <Button as={NavLink} to="/return" variant="outline-light" size="lg" className="w-80 rounded-5 landing-buttons"><p className="large-button-text">Return A Container</p></Button>
          </Row>
        </Container>
      </Col>
      <Col className="py-3">
        <Container className="rounded-5 how-to">
          <Row className="text-center">
            <h2 className="large-button-text py-2 landing-buttons rounded-5">
              Here&apos;s How It Works:
            </h2>
          </Row>
          <Row className="justify-content-center p-4">
            <p className="rounded-5 landing-buttons landing-list">
              1. Select your container type.
            </p>
            <p className="rounded-5 landing-buttons landing-list">
              2. Choose a certified washing facility.
            </p>
            <p className="rounded-5 landing-buttons landing-list">
              3. Have a great event!
            </p>
            <p className="rounded-5 landing-buttons landing-list">
              4. Return the containers when you&apos;re done.
            </p>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
);

export default Landing;
