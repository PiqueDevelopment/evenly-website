import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GettingStarted from './pages/docs/GettingStarted.tsx';
import AddEntry from './pages/docs/AddEntry.tsx';
import EditEntry from './pages/docs/EditEntry.tsx';

function DocRoutes() {
    return (
      <Routes>
        <Route path="getting-started" element={<GettingStarted />} />
        <Route path="add-entry" element={<AddEntry />} />
        <Route path="edit-entry" element={<EditEntry />} />
        {/* <Route path="/placeholder2" element={<Placeholder2 />} />
        <Route path="/placeholder3" element={<Placeholder3 />} />
        <Route path="/placeholder4" element={<Placeholder4 />} />
        <Route path="/placeholder5" element={<Placeholder5 />} />
        <Route path="/placeholder6" element={<Placeholder6 />} /> */}
        {/* Add other doc routes here */}
      </Routes>
    );
  }
  
  export default DocRoutes;