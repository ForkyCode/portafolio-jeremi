import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <div>
        <h3>Jeremi Studio</h3>
        <p>Designing landing pages for bold founders and fast-moving teams.</p>
      </div>
      <div className="footer-links">
        <a href="https://www.behance.net" target="_blank" rel="noreferrer">
          Behance
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://dribbble.com" target="_blank" rel="noreferrer">
          Dribbble
        </a>
      </div>
    </div>
    <div className="footer-bottom">
      <span>2025 Jeremi Studio. All rights reserved.</span>
      <span>Built with React + Vite.</span>
    </div>
  </footer>
);

export default Footer;
