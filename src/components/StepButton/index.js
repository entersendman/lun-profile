import React from 'react';
import styles from './StepButton.module.css';

const StepButton = ({completed, onClick, label}) => {
  return (
    <div
      className={
        completed ? [styles.stepButton, styles.completed].join(' ')
          : styles.stepButton
      }
      onClick={onClick}

    >
      {label}
    </div>
  );
};

export default StepButton;
