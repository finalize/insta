import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from "./Home";

const App = () => (
  <BrowserRouter>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/friends'>Friends</Link></li>
    </ul>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/friends' component={Friends} />
  </BrowserRouter>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>フレンズに投票するページです</p>
  </div>
);
const Friends = () => (
  <div>
    <h2>Friends</h2>
    <p>ここにフレンズのリストを書きます</p>
  </div>
);

export default App;
