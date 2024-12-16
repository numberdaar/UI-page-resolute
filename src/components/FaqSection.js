import React from 'react';

const FaqSection = () => {
  return (
    <section id="faq" className="container my-5">
      <h2 className="text-center mb-4">FAQ</h2>
      <div className="accordion" id="faqAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              What is e-Ink technology?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body">
              e-Ink is a paper-like display technology that is easy on the eyes.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;