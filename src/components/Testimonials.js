import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-5">
      <div className="container text-center">
        <h2>What People Are Saying</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <blockquote className="blockquote">
              <p>
                "When I'm not designing, you can find me exploring new hiking
                trails or experimenting with digital art."
              </p>
              <footer className="blockquote-footer">Lekshmi V, UI/UX Designer</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
