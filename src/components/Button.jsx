import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', disabled = false, icon, iconPosition = 'right' }) => {
  const baseClasses = 'rounded-md font-kanit font-bold uppercase tracking-wider transition-all active:scale-95';
  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3.5',
    lg: 'px-10 py-5 text-lg'
  };
  const variantClasses = {
    primary: 'bg-ember text-white ember-glow hover:-translate-y-1',
    secondary: 'bg-ink-soft text-on-background border border-mist/10 hover:bg-mist/10',
    ghost: 'bg-transparent text-on-background border border-transparent hover:border-mist/20 hover:bg-mist/5',
    outline: 'bg-transparent text-ember border-2 border-ember hover:bg-ember hover:text-white',
    outlineMist: 'bg-transparent text-mist border-2 border-mist/30 hover:border-mist hover:bg-mist/5',
    mist: 'bg-mist text-background hover:bg-white'
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const iconClasses = 'material-symbols-outlined text-lg';

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses}`}
      disabled={disabled}
    >
      {icon && iconPosition === 'left' && <span className={iconClasses}>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className={iconClasses}>{icon}</span>}
    </button>
  );
};

export default Button;
