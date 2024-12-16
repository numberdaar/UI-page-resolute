import React from 'react';

const Testimonials = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">What People Are Saying</h2>
      <div className="text-center">
        <img 
          src="https://via.placeholder.com/80?text=User" 
          alt="User" 
          className="rounded-circle mb-3"
        />
        <p>"This platform transformed the way I learn and teach. Highly recommended!"</p>
        <h6>- John Doe</h6>
      </div>
    </section>
  );
};

export default Testimonials;
