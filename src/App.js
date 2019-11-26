import React from 'react';

import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home.js/Home';
import Rooms from './pages/Rooms/Rooms';
import SingleRoom from './pages/SingleRoom/SingleRoom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path = '/' exact component = {Home} />
        <Route path = '/rooms' exact component = {Rooms} />
        <Route path = '/rooms/:id' exact component = {SingleRoom} />
        <Route  component = {ErrorPage} />
      </Switch>

    </div>
  );
}

export default App;
