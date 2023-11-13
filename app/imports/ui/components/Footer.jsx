import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Instagram } from 'react-bootstrap-icons';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 bg-light">
    <Container>
      <Row xs={1} md={2}>
        <Col md={4} className="text-center">
          <Image src="/images/clear-logo.png" className="rounded-1 w-100" />
        </Col>
        <Col md={8} className="text-center">
          <p>
            Full Cycle Takeout is a non-profit project created by the team at <a href="https://www.zerowasteoahu.org/">Zero Waste O’ahu</a>.
          </p>
          <p>
            For any inquiries, email: <a href="mailto:info@fullcycletakeouthawaii.org">info@fullcycletakeouthawaii.org</a>
          </p>
          <p>
            Or follow us on Instagram: <a href="https://www.instagram.com/fullcycletakeout/"><Instagram /> </a>
          </p>
          <p><a href="https://www.paypal.com/donate/?hosted_button_id=QAQ3ZMQ3YWJ9A">Donate</a></p>
          <p>Copyright © 2023</p>
          <p>A 501(c)(3) Compliance Non-Profit Organization.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
