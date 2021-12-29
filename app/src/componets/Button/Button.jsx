import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../../context/GlobalContext';

const Button = ({ text, onClick, type }) => {
  const { search } = useContext(GlobalContext);
  if (type === 'search') {
    return (
      <button onClick={() => onClick('searchByText', '', search)}>
        {text}
      </button>
    );
  } else {
    return (
      <button onClick={() => onClick(({ target }) => onClick(target))}>
        {text}
      </button>
    );
  }
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
