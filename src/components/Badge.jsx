import React from 'react';

const Badge = ({ children, variant = 'default', size = 'md' }) => {
  const baseClasses = 'inline-flex items-center rounded-full font-kanit font-bold uppercase tracking-wider';
  const sizeClasses = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-3 text-base'
  };
  const variantClasses = {
    default: 'bg-ember text-white',
    outline: 'bg-transparent text-ember border-2 border-ember',
    ghost: 'bg-transparent text-ember border border-ember/20'
  };

  return (
    <span className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`}>
      {children}
    </span>
  );
};

export default Badge;
