import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Instagram } from 'react-bootstrap-icons';

const Footer = () => (
  <footer className="footer bg-light py-4">
    <Container>
      <Row className="align-items-center justify-content-md-between text-center text-md-start">
        <Col xs={12} md={4} className="mb-3 mb-md-0">
          <Image src="/images/clear-logo.png" height="60" alt="Full Cycle Takeout Logo" />
        </Col>
        <Col xs={12} md={8}>
          <Row>
            <Col xs={12} md={6} lg={5} className="mb-3 mb-md-0">
              <p className="mb-1">A non-profit project by <a href="https://www.zerowasteoahu.org/" className="link-secondary">Zero Waste O’ahu</a>.</p>
              <p>Email us at <a href="mailto:info@fullcycletakeouthawaii.org" className="link-secondary">info@fullcycletakeouthawaii.org</a></p>
            </Col>
            <Col xs={12} md={6} lg={4} className="mb-3 mb-md-0">
              <Button variant="outline-secondary" href="https://www.instagram.com/fullcycletakeout/" className="me-2">
                <Instagram /> Follow us
              </Button>
              <Button variant="primary" href="https://www.paypal.com/donate/?hosted_button_id=QAQ3ZMQ3YWJ9A">Donate</Button>
            </Col>
            <Col xs={12} lg={3} className="text-muted">
              <small>© 2023 Full Cycle Takeout</small><br/>
              <small>A 501(c)(3) Compliance Non-Profit Organization.</small>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
