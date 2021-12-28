import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { GlobalStorage } from './context/GlobalContext';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
