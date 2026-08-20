import React from 'react';
import styles from './Button.module.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'font-kanit font-bold uppercase tracking-wider btn-transition active:scale-95';
  const variantClasses = {
    primary: 'bg-ember text-white ember-glow hover:-translate-y-1',
    secondary: 'bg-ink-soft text-on-background border border-mist/10 hover:bg-mist/10',
    ghost: 'bg-transparent text-on-background border border-transparent hover:border-mist/20 hover:bg-mist/5',
    outline: 'bg-transparent border-2 border-ember text-ember hover:bg-ember hover:text-white',
    outlineMist: 'bg-transparent border-2 border-mist/30 text-mist hover:border-mist hover:bg-mist/5',
    mist: 'bg-mist text-background hover:bg-white',
  };
  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3.5',
    lg: 'px-10 py-5 text-lg tracking-widest',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      className={classes}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
