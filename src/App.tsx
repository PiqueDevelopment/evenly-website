import React from 'react';
import './App.css';
import Navbar from './components/Navbar.tsx';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Docs from './pages/Docs.tsx';
import About from './pages/About.tsx';
import Download from './pages/Download.tsx';


function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/about" element={<About />} />
          <Route path="/download" element={<Download />} />
        </Routes>
      </div>
  );
}

export default App;
