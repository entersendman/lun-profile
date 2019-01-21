import React from 'react';
import styles from './Button.module.css';

const Button = ({onClick, children, disabled, customStyle, reverse}) => {
  const reversedStyle = reverse
    ? [styles.button, styles.buttonReverse].join(' ')
    : styles.button;
  return (
    <div
      onClick={onClick}
      className={reversedStyle}
      aria-disabled={disabled}
      style={customStyle}
    >
      {children}
    </div>
  );
};

export default Button;
