import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CertificateDetails from './pages/CertificateDetails';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import ParticlesBackground from './components/ParticlesBackground';

const App = () => {
  return (
    <Router>
      <NavBar />
      <ParticlesBackground/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificate/:id" element={<CertificateDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
