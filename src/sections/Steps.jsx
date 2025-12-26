import React from 'react';
import SectionTitle from '../components/SectionTitle.jsx';
import { steps } from '../data/content.js';

const Steps = () => (
  <section id="process" className="steps">
    <div className="container">
      <SectionTitle
        eyebrow="How it works"
        title="A simple, transparent process."
        description="From kickoff to launch, you always know what happens next."
      />
      <div className="steps-grid">
        {steps.map((step, index) => (
          <article key={step.title} className="step-card">
            <span className="step-index">0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Steps;
