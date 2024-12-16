import React, { useRef } from 'react';
import loka from '../images/loka.jpg';
import nirmana from '../images/nirmana.jpg';
import aarna from '../images/aarna.jpg';
import eyora from '../images/eyore.jpg';
import saha from '../images/saha.jpg';

const OurSolutions = () => {
  const solutions = [
    { id: 1, imgSrc: loka, alt: "Solution 1", title: "LOKA", info: "Solution LOKA provides innovative designs for modern businesses." },
    { id: 2, imgSrc: nirmana, alt: "Solution 2", title: "NIRMANA", info: "NIRMANA focuses on sustainable development and green energy solutions." },
    { id: 3, imgSrc: aarna, alt: "Solution 3", title: "AARNA", info: "AARNA offers cutting-edge technology for AI and machine learning." },
    { id: 4, imgSrc: eyora, alt: "Solution 4", title: "EYORA", info: "EYORA delivers advanced cloud solutions for enterprise-level projects." },
    { id: 5, imgSrc: saha, alt: "Solution 5", title: "SAHA", info: "SAHA integrates smart solutions for urban development and IoT." },
  ];
  const overlays = useRef([]);

  const handleMouseEnter = (index) => {
    overlays.current[index].style.opacity = '1';
  };

  const handleMouseLeave = (index) => {
    overlays.current[index].style.opacity = '0';
  };

  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Our Solutions</h2>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="solution-img-container position-relative"
            style={{
              width: '200px',
              height: '400px',
              borderRadius: '8px',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <img
              src={solution.imgSrc}
              alt={solution.alt}
              className="w-100 h-100"
              style={{
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
              }}
            />
            <div
              className="solution-title-overlay position-absolute bottom-0 w-100 text-center text-white py-2"
              style={{
                background: 'rgba(0, 0, 0, 0.6)',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              {solution.title}
            </div>

            <div
              className="overlay position-absolute top-0 start-0 end-0 bottom-0 d-flex flex-column justify-content-center align-items-center text-white text-center p-3"
              ref={(el) => (overlays.current[index] = el)}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                opacity: '0',
                transition: 'opacity 0.3s ease',
              }}
            >
              <p>{solution.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurSolutions;
