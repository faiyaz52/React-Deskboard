import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './Continer/Navbar'  ;
import { Navigation } from './Continer/Navigation'  ;
import Chart  from './Continer/Chart';  
import { Home } from './Home';
function App() {
  return (
   <div>
    <Router>
            <div className="">
              <Navigation/>
                <Navbar/>  
                <Switch>
                <Route exact path="/"component={Home}/>
                <Route exact path="/Chart"component={Chart}/>
              </Switch>         
           </div>
        </Router>
   </div>
      
  );
}

export default App;

