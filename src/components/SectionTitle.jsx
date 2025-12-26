import React from 'react';

const SectionTitle = ({ eyebrow, title, description }) => (
  <div className="section-title">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default SectionTitle;
