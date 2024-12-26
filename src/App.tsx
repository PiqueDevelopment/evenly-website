import React from 'react';
import './App.css';
import Navbar from './components/Navbar.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Docs from './pages/Docs';
// import About from './pages/About';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/"/>
        {/* <Route path="/docs" element={<Docs />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
