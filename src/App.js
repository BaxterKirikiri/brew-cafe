import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Error from './pages/Error';
import './App.css'

const App = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route exact path="/:email" component={Home} />
        <Route exact path="/" component={Error} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default App;