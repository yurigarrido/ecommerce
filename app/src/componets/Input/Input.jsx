import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ placeholder, text, onChange, value }) => {
  return (
    <input
      placeholder={placeholder}
      onChange={({ target }) => onChange(target.value)}
      value={value}
    >
      {text}
    </input>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  text: PropTypes.string,
  onChange: PropTypes.string,
  value: PropTypes.string,
};

export default Input;
