import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import FooterBottom from './Sections/FooterBottom';
import HeaderTop from './Sections/HeaderTop';


const App = () => {

  return (
    <>
      <HeaderTop></HeaderTop>
      <BrowserRouter>
        <Routes>
          <Route path='/SIH/home' element={<Home />} />
          <Route path='/SIH/about' element={<About />} />
        </Routes>
      </BrowserRouter>
      <FooterBottom></FooterBottom>
    </>
  );


};

export default App;