import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { GlobalStorage } from './context/GlobalContext';
import Home from './pages/Home';
import Checkin from './pages/Checkin';
import Payment from './pages/Payment';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/checkin" component={Checkin} />
          <Route path="/payment" component={Payment} />
          <Route path="/details/:id" component={Details} />
        </Switch>
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
