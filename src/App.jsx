import { useState } from 'react'

import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import BlogPage from './pages/BlogPage';

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/gallery" element={<Gallery  />} />
        <Route path="/blog" element={<BlogPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
