import React from 'react';

const Input = ({onChange, value, validation, name}) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        name={name}
        onChange={onChange(value, name)}
      />
      <span>{`-${validation}`}</span>
    </div>
  );
};

export default Input;
