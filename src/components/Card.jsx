import React from 'react';

const Card = ({ children, variant = 'default', className = '', ...props }) => {
  const baseClasses = 'rounded-lg overflow-hidden';
  const variantClasses = {
    default: 'bg-background border border-mist/10',
    elevated: 'bg-background border border-mist/10 shadow-lg',
    outlined: 'border-2 border-mist/30',
  };

  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;
