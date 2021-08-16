import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'


import Sidebar from './Sidebar';
import Allproduct from './Allproduct';
import Card from './Card';


function App() {
  return (
    <Router>
    
    
    <Switch>
    
    
    <Route exact path="/" component={Card} />
    <Route exact path="/product" component={Allproduct} />
  
  
      
       
    </Switch>
    
    
   
  </Router>
  );
}

export default App;
