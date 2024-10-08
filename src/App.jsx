import { useState } from 'react'

import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Services from './pages/Services';

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
