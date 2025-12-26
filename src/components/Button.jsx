import React from 'react';

const Button = ({ variant = 'primary', children, href }) => {
  const className = `btn btn-${variant}`;

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
};

export default Button;
