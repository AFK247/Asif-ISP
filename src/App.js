import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Packages from './components/Packages';
import Products from './components/Products';
import Intro from './components/Intro';
import Home from './components/Pages/Home';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <Router>
        <Intro/>
        <Navbar/>
        <Switch>

          <Route exact path='/' component={Home} />
          <Route path='/packages' component={Packages} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp}/>
          
    
        </Switch>
        
      </Router>
    </>
  );
}

export default App;