import React from 'react';
import axios from 'axios'
import {Route} from 'react-router-dom'

import Login from './components/Login'
import Register from './components/Register'
import UsersList from './components/UsersList'

import './App.css';

const login = (user) => {
  axios.post("http://localhost:5001/api/auth/login", user)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
}

const register = (user) => {
  axios.post("http://localhost:5001/api/auth/register", user)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
}



function App() {
  return (
    <div className="App">
      <h1>Heres the ol app!</h1>
      <Route exact path="/login" render={props => <Login login={login} {...props} />} />
      <Route exact path="/register" render={props => <Register register={register} {...props} />} />
      {/* <Login login={login} /> */}
      {/* <Register register={register} /> */}
      <UsersList />
    </div>
  );
}

export default App;
