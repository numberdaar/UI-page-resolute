import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQs = () => {
  return (
    <section id="faq" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">FAQs</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is e-ink technology?</Accordion.Header>
            <Accordion.Body>
              E-ink technology mimics real paper for minimal eye strain.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How is this product different?</Accordion.Header>
            <Accordion.Body>
              Our platform focuses on interactive and personalized learning
              experiences.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;