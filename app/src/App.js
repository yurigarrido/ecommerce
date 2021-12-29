import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { GlobalStorage } from './context/GlobalContext';
import Home from './pages/Home';
import Checkin from './pages/Checkin';

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/checkin" component={Checkin} />
        </Switch>
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
