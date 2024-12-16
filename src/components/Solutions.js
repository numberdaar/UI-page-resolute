import React from 'react';

const Solutions = () => {
  const solutions = ['LOKA', 'NIRMANA', 'AARNA', 'SEYORA', 'SAHA'];

  return (
    <section id="solutions" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Our Solutions</h2>
        <div className="row text-center">
          {solutions.map((solution, index) => (
            <div key={index} className="col-md-3 mb-3">
              <div className="p-3 border rounded">
                <h5>{solution}</h5>
                <p>Explore our solution: {solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
