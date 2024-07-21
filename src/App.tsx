import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';


import HomePage from './pages/home';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        < Route  path='/' element = {< HomePage/>} />
        {/* <Route exact path="/" element = {<HomePage/>} /> */}
        {/* <Route exact path="/secondpage" element = {<Secondpage/>} />
        <Route exact path="/Student Data Entry Form" element = {<ThirdPage/>} /> */}
      </Routes>
    </Router>

    </div>
  );
}

export default App;
