import React from 'react';
import SectionTitle from '../components/SectionTitle.jsx';
import { features } from '../data/content.js';

const Features = () => (
  <section id="work" className="features">
    <div className="container">
      <SectionTitle
        eyebrow="Selected focus"
        title="A landing page structure built to convert."
        description="Every section is designed to tell a clear story, build trust, and move visitors toward action."
      />
      <div className="card-grid">
        {features.map((feature) => (
          <article key={feature.title} className="card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
