import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import FourOhFour from './FourOhFour';
import TowerOfHanoi from './games/towerofhanoi';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/towerofhanoi" component={TowerOfHanoi} />
      <Route component={FourOhFour} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('app'));
