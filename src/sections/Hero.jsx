import React from 'react';
import Button from '../components/Button.jsx';

const Hero = () => (
  <section id="top" className="hero">
    <div className="container hero-grid">
      <div className="hero-copy">
        <p className="badge">Freelance product designer</p>
        <h1>
          Landing pages that feel bold, convert fast, and tell your story with
          clarity.
        </h1>
        <p className="lead">
          I help founders and creators turn ideas into launch-ready landing
          pages with strong identity, clear messaging, and a premium finish.
        </p>
        <div className="hero-actions">
          <Button href="#work">View work</Button>
          <Button variant="outline" href="#contact">
            Get a quote
          </Button>
        </div>
        <div className="hero-metrics">
          <div>
            <strong>32+</strong>
            <span>Launches shipped</span>
          </div>
          <div>
            <strong>8 yrs</strong>
            <span>Design experience</span>
          </div>
          <div>
            <strong>24h</strong>
            <span>Rapid turnaround</span>
          </div>
        </div>
      </div>
      <div className="hero-card">
        <div className="hero-card-top">
          <span className="dot dot-green" />
          <span className="dot dot-amber" />
          <span className="dot dot-rose" />
        </div>
        <div className="hero-card-content">
          <h3>Latest project</h3>
          <p>
            A cinematic landing for a fintech launch with a 4.8% conversion
            rate.
          </p>
          <div className="hero-card-tags">
            <span>Branding</span>
            <span>UI Design</span>
            <span>Vite + React</span>
          </div>
          <div className="hero-card-footer">
            <span>Scroll to explore</span>
            <span className="arrow">-&gt;</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
