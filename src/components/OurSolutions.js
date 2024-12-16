import React from 'react';

const OurSolutions = () => {
  const solutions = [
    { id: 1, imgSrc: "/images/loka.png", alt: "Solution 1", title: "Solution 1" },
    { id: 2, imgSrc: "/images/nirmana.png", alt: "Solution 2", title: "Solution 2" },
    { id: 3, imgSrc: "/images/aarna.png", alt: "Solution 3", title: "Solution 3" },
    { id: 4, imgSrc: "/images/eyora.png", alt: "Solution 4", title: "Solution 4" },
    { id: 5, imgSrc: "/images/saha.png", alt: "Solution 5", title: "Solution 5" },
    { id: 6, imgSrc: "/images/solution-pop.jpg", alt: "Solution 6", title: "Solution 6", isPopup: true },  // Special Popup Image
  ];

  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Our Solutions</h2>
      <div className="row">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className={`col-md-4 mb-4`}
            style={{ position: 'relative', padding: '0 10px' }}
          >
            <div
              className={`solution-img-container ${solution.isPopup ? 'popup-img' : ''}`}
              style={{
                backgroundImage: `url(${solution.imgSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                aspectRatio: '1/2', // Aspect Ratio 1:2 (height:width)
                height: '200px',
                borderRadius: '8px',
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              <div className="solution-title-overlay">
                <h3 className="text-white">{solution.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurSolutions;
