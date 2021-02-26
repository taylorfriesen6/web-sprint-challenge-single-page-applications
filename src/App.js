import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Form from './Form'

const App = () => {
  return (
    <Router>
      <h1>Lambda Eats</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Pizza</Link>
      </nav>
      <Switch>
        <Route path='/pizza'><Form /></Route>
        <Route path='/'>home</Route>
      </Switch>
    </Router>
  );
};
export default App;
