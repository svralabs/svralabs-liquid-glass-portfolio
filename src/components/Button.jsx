import React from 'react';
import styles from './Button.module.css';

const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    className,
  ].join(' ');

  return (
    <button className={buttonClasses} {...props}>
      {icon && iconPosition === 'left' && (
        <span className={styles.icon}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className={styles.icon}>{icon}</span>
      )}
    </button>
  );
};

export default Button;
