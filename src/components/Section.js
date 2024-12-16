import React from 'react';

const Section = ({ id, title, content, className }) => {
  return (
    <section id={id} className={className}>
      <div className="container">
        {title && <h2 className="mb-4 text-center">{title}</h2>}
        {content}
      </div>
    </section>
  );
};

export default Section;