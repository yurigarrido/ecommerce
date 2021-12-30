import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  placeholder,
  text,
  onChange,
  value,
  categories,
  type = 'text',
}) => {
  if (categories) {
    return (
      <select
        onChange={({ target }) => onChange('dropdonw', target.value)}
        name="selec"
      >
        {categories.map((categorie, index) => {
          return (
            <option value={categorie.id} key={index}>
              {categorie.name}
            </option>
          );
        })}
      </select>
    );
  } else {
    return (
      <label>
        {text}
        <input
          placeholder={placeholder}
          onChange={({ target }) => onChange(target.value)}
          value={value}
          type={type}
        ></input>
      </label>
    );
  }
};

Input.propTypes = {
  placeholder: PropTypes.string,
  text: PropTypes.string,
  onChange: PropTypes.string,
  value: PropTypes.string,
  categories: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
