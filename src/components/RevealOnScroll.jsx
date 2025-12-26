import React from 'react';
import useElementOnScreen from '../hooks/useElementOnScreen.js';

const RevealOnScroll = ({ children, direction = 'left', delay = 0 }) => {
  const [ref, isVisible] = useElementOnScreen({ threshold: 0.1 });

  const translateClass =
    direction === 'left'
      ? '-translate-x-20'
      : direction === 'right'
      ? 'translate-x-20'
      : 'translate-y-10';

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${translateClass}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
