import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import {Route, Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

const loginUrl = "http://localhost:3000/api/v1/login"
const profileUrl = "http://localhost:3000/api/v1/profile"

class App extends Component {
  render(){
    return (
      <div className="App">
        <Switch>
          <PrivateRoute exact path='/'/>
          <Route path='/login' component={Login} />
          <Route render={() => <Redirect to='/' />} />
        </Switch>
      </div>
    );
  }
}

export default App;
