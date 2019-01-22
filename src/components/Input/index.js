import React from 'react';
import styles from './Input.module.css';

const Input = ({onChange, value, validation, name, placeholder, type}) => (
  <div className={styles.inputContainer}>
    <input
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      className={styles.input}
      placeholder={placeholder}
    />
    {
      validation && (
        <span className={styles.invalid}>
          {`-${validation}`}
        </span>
      )
    }
  </div>
);

export default Input;
