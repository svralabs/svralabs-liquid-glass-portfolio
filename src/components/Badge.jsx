import React from 'react';
import styles from './Badge.module.css';

const Badge = ({
  children,
  color = 'ember',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-kanit font-bold uppercase tracking-wider';
  const colorClasses = {
    ember: 'bg-ember text-white',
    mist: 'bg-mist text-background',
    ink: 'bg-ink-soft text-on-background',
  };
  const sizeClasses = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-1.5 text-sm',
    lg: 'px-5 py-2 text-base',
  };

  const classes = `${baseClasses} ${colorClasses[color]} ${sizeClasses[size]} ${className}`;

  return (
    <span
      className={classes}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
