import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-3">
    <Row className="text-center justify-content-center">
      <Image src="/images/waffle-setup-cropped.jpg" className="rounded-5 w-100" />
      <Container className="position-absolute my-4">
        <Button as={NavLink} to="/rent" variant="outline-light" size="lg" className="w-75 my-1 my-md-4 my-lg-5 border border-2 rounded-5"><p className="landing">Rent A Container</p></Button>
        <Button as={NavLink} to="/return" variant="outline-light" size="lg" className="w-75 my-1 my-md-4 my-lg-5 border border-2 rounded-5"><p className="landing">Return A Container</p></Button>
      </Container>
    </Row>
  </Container>
);

export default Landing;
