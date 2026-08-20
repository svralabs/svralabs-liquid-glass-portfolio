import React from 'react';

const Badge = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-kanit font-bold uppercase tracking-wider';
  const variantClasses = {
    primary: 'bg-ember text-white',
    secondary: 'bg-ink-soft text-on-background',
    outline: 'border-2 border-ember text-ember',
    outlineMist: 'border-2 border-mist/30 text-mist',
    mist: 'bg-mist text-background',
  };
  const sizeClasses = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-1.5 text-sm',
    lg: 'px-5 py-2 text-base',
  };

  const badgeClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <span className={badgeClasses} {...props}>
      {children}
    </span>
  );
};

export default Badge;
