import React, { createContext } from 'react';
import PropTypes from 'prop-types';

// esse eu importo para usar no useContext
const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [estado, setEstado] = React.useState();

  const payload = {
    estado,
    setEstado,
  };

  return (
    <GlobalContext.Provider value={payload}>{children}</GlobalContext.Provider>
  );
};

GlobalStorage.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GlobalContext;
