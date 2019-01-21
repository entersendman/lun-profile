import React from 'react';
import styles from './FormLabel.module.css';

const FormLabel = ({label}) => {
  return (
    <div className={styles.label}>{label}</div>
  );
};

export default FormLabel;
