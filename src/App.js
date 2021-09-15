import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import React from 'react';
import Dashboard from '../src/pages/Dashboard';
import Messages from './pages/Messages';
import { Switch } from '@material-ui/core';


function App() {

  return (
    <React.Fragment>
      <Header />
      <Router>
        <Switch>
          <Dashboard />
          <Messages />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
