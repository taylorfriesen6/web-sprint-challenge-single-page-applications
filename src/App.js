import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <h1>Lambda Eats</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Pizza</Link>
      </nav>
      <p>You can remove this code and create your own header</p>
      <Switch>
        <Route path='/pizza'>pizza</Route>
        <Route path='/'>home</Route>
      </Switch>
    </Router>
  );
};
export default App;
