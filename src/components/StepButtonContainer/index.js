import React from 'react';
import styles from './StepButtonContainer.module.css';

const StepButtonContainer = ({children}) => {
  return (
    <div className={styles.stepButtonContainer}>
      {children}
    </div>
  );
};

export default StepButtonContainer;
