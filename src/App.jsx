import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Services from './pages/Services/Services';
import Certificate from './pages/Certificate/Certificate';
import Footer from './components/Footer/Footer';
import Main from './components/MainCon/main';
import Home from './pages/Home/Home';
import SourceCode from './pages/SourceCode/SourceCode';
import ProjectAssets from './pages/ProjectAssets/ProjectAssets';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/source-code" element={<SourceCode />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/services" element={<Services />} />
        <Route path="/project-assets" element={<ProjectAssets />} />
        <Route path="/stock-photos" element={<ProjectAssets />} />
        <Route path="/templates" element={<ProjectAssets />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
