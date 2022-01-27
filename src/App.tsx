import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage/AboutPage';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>

  </>
);

export default App;
