import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import LoginPage from './layout/LoginPage'
import Register from './layout/Register';

const App=()=> {
  return (
    <Router>
    <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/Register" component={Register} />
    </Switch>
</Router>
  );
}

export default App;
