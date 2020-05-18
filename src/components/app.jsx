import React from 'react';
import '../styles/app.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Header from './header';
import Home from './home';
import User from './user';
import Recipe from './recipe';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/recipe">Chicken</Link>
            </li>
            <li>
              <Link to="/recipe">Pork</Link>
            </li>
            <li>
              <Link to="/recipe">Beef</Link>
            </li>
            <li>
              <Link to="/recipe">Fish</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/recipe">
            <Recipe />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
