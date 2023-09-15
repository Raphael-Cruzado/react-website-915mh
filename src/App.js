import React from 'react';
import Navbar from '../src/components/Navbar';
import {
  Routes, Route
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </>
  )
  
}

export default App;
