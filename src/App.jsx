import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import FooterBottom from './Sections/FooterBottom';
import HeaderTop from './Sections/HeaderTop';
import { HashRouter } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const App = () => {


  return (
    <>
      <HeaderTop></HeaderTop>
      <Outlet></Outlet>
      <FooterBottom></FooterBottom>
    </>
  );


};

export default App;