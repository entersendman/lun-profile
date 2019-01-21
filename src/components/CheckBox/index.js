import React from 'react';
import styles from './CheckBox.module.css';

const CheckBox = ({
    children,
    isActive,
    value,
    onChangeHandler,
    label,
    checked
}) => {
  return (
    <div className={styles.checkboxContainer}>
      <input
        type="checkbox"
        onChange={() => onChangeHandler(checked)}
        value={value}
        checked={checked}
      />
      <label
        htmlFor="checkbox"
        className={styles.checboxLabel}
      >
        {label}
      </label>
      {checked ? children : null}
    </div>
  );
};

export default CheckBox;
