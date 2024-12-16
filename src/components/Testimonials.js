import React from 'react';
import testimonialImage from '../images/WhatsApp Image 2024-07-22 at 1.22.38 AM.jpeg'; // Replace with your image path

const Testimonials = () => {
  const testimonial = {
    id: 1,
    text: "This solution has changed how I learn!",
    author: "Ankit Dalal",
    title: "Full Stack Developer",
    image: testimonialImage,
  };

  return (
    <section id="testimonials" className="container my-5">
      <h2 className="text-center mb-5">Testimonials</h2>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 mb-4 d-flex align-items-center">
          {/* Image on the Left */}
          <div className="flex-shrink-0 me-3">
            <img
              src={testimonial.image}
              alt={`Testimonial from ${testimonial.author}`}
              className="rounded-circle img-fluid"
              style={{
                width: '120px',
                height: '120px',
                objectFit: 'cover',
              }}
            />
          </div>
          {/* Text on the Right */}
          <div>
            <blockquote className="blockquote">
              <p className="mb-2" style={{ fontStyle: 'italic' }}>
                "{testimonial.text}"
              </p>
              <footer className="blockquote-footer mt-2">
                {testimonial.author}
                <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                  {testimonial.title}
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
