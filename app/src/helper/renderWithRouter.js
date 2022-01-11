//src/renderWithRouter.js
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { GlobalStorage } from '../context/GlobalContext';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(
      <Router history={history}>
        <GlobalStorage>{component}</GlobalStorage>
      </Router>
    ),
    history,
  };
};
export default renderWithRouter;
