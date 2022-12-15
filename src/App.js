import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbars from './components/Navbars';

function App() {
  return (
    <>
      <Router>
        <Navbars />
        <Routes>
          <Route path='/' exact  element={<Home />}/>
        </Routes>
      </Router>
    </>
  );
}


export default App;
