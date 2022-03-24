import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className: string;
}

const Button = ({ children, className }: ButtonProps) => {
  const additionalStyle = className ? className : '';
  return <span className={`button ${additionalStyle}`}>{children}</span>;
};
export { Button };
