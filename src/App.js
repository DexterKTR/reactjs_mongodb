import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import Login from './components/loginRegister/login'
import Profile from './components/loginRegister/profile'
import Register from './components/loginRegister/register'
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <div>
          <Navbar/>
          <div className="container">
            <Route exact path="/" component={Home}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/profile" component={Profile}/>
          </div>
      </div>
    </Router>
  );
}

export default App;
