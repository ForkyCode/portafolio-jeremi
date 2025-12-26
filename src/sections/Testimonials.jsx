import React from 'react';
import SectionTitle from '../components/SectionTitle.jsx';
import { testimonials } from '../data/content.js';

const Testimonials = () => (
  <section id="testimonials" className="testimonials">
    <div className="container">
      <SectionTitle
        eyebrow="Social proof"
        title="People love the clarity and craft."
        description="Partnerships that feel collaborative and outcomes that feel premium."
      />
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article key={item.name} className="testimonial-card">
            <p className="quote">"{item.quote}"</p>
            <div className="author">
              <span>{item.name}</span>
              <span>{item.role}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
