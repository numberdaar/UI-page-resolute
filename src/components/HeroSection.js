import React from 'react';
import edu from '../images/pexels-jakubzerdzicki-29799593.jpg';

const HeroSection = () => {
  return (
    <>
      <section className="my-5 text-center" style={{ position: 'relative' }}>
        <img
          src={edu}
          alt="Hero Section"
          className="img-fluid"
          style={{
            width: '100vw', 
            height: '80vh',
            display: 'block',
            objectFit: 'cover',
          }}
        />
        <div
          className="hero-heading"
          style={{
            position: 'absolute',
            bottom: '20%', 
            left: '5%',
            transform: 'translateY(20%)',
            color: '#fff',
            fontSize: '2rem',
            fontWeight: 'bold',
          }}
        >
          <h1>India's First e-Ink based Education Solution</h1>
        </div>
      </section>
      <section className="about-section py-5 text-center">
        <div className="container">
          <h2
            style={{
              textAlign: 'left',
              marginBottom: '1rem',
              color: '#555',
            }}
          >
            About Us
          </h2>

          <h3
            style={{
              textAlign: 'left',
              marginBottom: '1rem',
            }}
          >
            Transforming Education, One Student at a Time
          </h3>
          <p style={{ textAlign: 'justify' }}>
            We are dedicated to providing innovative and effective educational solutions powered by e-Ink technology. Our mission is to revolutionize the way education is delivered, making it more accessible, sustainable, and engaging for students everywhere.
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;