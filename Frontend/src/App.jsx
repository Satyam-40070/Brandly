import Example from "./pages/Home";
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from "./pages/Login";


function App() {

  return (
    <>
     <BrowserRouter>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Example />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
      </BrowserRouter>
      
    </>
  )
}

export default App
