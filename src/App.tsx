import React from 'react';
import './App.css';
// import Navbar from './components/Navbar.tsx';
// import Footer from './components/Footer.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
// import Docs from './pages/Docs.tsx';
import GettingStarted from './pages/docs/GettingStarted.tsx'
import About from './pages/About.tsx';
import Download from './pages/Download.tsx';
import DocRoutes from './DocRoutes.tsx';


function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs/getting-started" element={<GettingStarted />} />
          <Route path="/about" element={<About />} />
          <Route path="/download" element={<Download />} />
          <Route path="/docs/*" element={<DocRoutes />} />
        </Routes>
      </div>
  );
}

export default App;
