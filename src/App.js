import React from 'react';
import Navbar from '../src/components/Navbar';
import Button from './components/Button';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
      
      <Button />
    </div>
  );
}

export default App;
