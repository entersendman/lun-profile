import React from 'react';
import styles from './StepButtonContainer.module.css';

const StepButtonContainer = ({children}) => (
  <div className={styles.stepButtonContainer}>
    {children}
  </div>
);

export default StepButtonContainer;
