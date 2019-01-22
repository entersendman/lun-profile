import React from 'react';
import styles from './StepButton.module.css';

const StepButton = ({completed, onClick, label}) => {
  const completedStyle = completed
    ? [styles.stepButton, styles.completed].join(' ')
    : styles.stepButton;

  return (
    <div
      className={completedStyle}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default StepButton;
