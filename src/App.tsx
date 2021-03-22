import React from 'react';
import { Switch, Route, withRouter, RouteComponentProps, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to={'/'}> Home </Link>
      </header>
 
      <Switch>
        <Route path={'/'} exact component={HomePage} />
      </Switch>
  </div>
  );
}

export default App;
