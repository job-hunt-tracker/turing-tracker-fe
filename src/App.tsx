import './App.css';
import Home from './Components/Home/Home';
import Splash from './Components/Splash/Splash';
import Login from './Components/Login/Login';
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import fetchData from './apiCalls';
import AppLayout from './layout/AppLayout';
import { userState } from './atoms';

function App() {

  return (
    <AppLayout>
      <Routes>
        <Route path="" element={<Splash />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Login />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </AppLayout>
  );
}

export default App