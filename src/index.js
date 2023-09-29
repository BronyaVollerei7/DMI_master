import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import HomeIT from './Dashboard/home.js';
import LoginPage from './Login/login.js';
import BeritaPage from './Berita/Berita.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
let namaberita = "sasda"
root.render(
  <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} /> 
      <Route path="/berita/:beritaId" element={<BeritaPage />} />
      <Route path="/" element={<HomeIT />} />
    </Routes>
  </Router>,
);
