import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { id: 1, text: "This solution has changed how I learn!", author: "Student A" },
    { id: 2, text: "Managing classrooms has never been easier.", author: "Teacher B" },
  ];

  return (
    <section id="testimonials" className="container my-5 text-center">
      <h2>Testimonials</h2>
      <div className="row">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="col-md-6">
            <blockquote className="blockquote">
              <p>"{testimonial.text}"</p>
              <footer className="blockquote-footer">{testimonial.author}</footer>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
