import React from 'react';
import Button from '../components/Button.jsx';

const CTA = () => (
  <section id="contact" className="cta">
    <div className="container cta-card">
      <div>
        <p className="eyebrow">Ready to launch</p>
        <h2>Let us build a landing page that works as hard as you do.</h2>
        <p>
          Tell me about your product, timeline, and goals. I will reply within
          24 hours with a clear plan.
        </p>
      </div>
      <div className="cta-actions">
        <Button href="mailto:hello@jeremistudio.com">hello@jeremistudio.com</Button>
        <Button variant="outline" href="#top">
          Back to top
        </Button>
      </div>
    </div>
  </section>
);

export default CTA;
