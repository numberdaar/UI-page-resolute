import React from 'react';

const SectionItem = ({ title, description }) => {
  return (
    <div className="col-md-4 mb-4">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SectionItem;