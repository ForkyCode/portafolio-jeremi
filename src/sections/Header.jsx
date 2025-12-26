import React from 'react';
import Button from '../components/Button.jsx';
import { navLinks } from '../data/content.js';

const Header = () => (
  <header className="site-header">
    <div className="container header-inner">
      <a className="logo" href="#top">
        <span>Jeremi</span>
        <span className="logo-accent">Studio</span>
      </a>
      <nav className="nav">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <Button variant="ghost" href="#contact">
        Book a call
      </Button>
    </div>
  </header>
);

export default Header;
