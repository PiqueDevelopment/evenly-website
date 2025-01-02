import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Make sure to import the Doc Pages to route to
import GettingStarted from './pages/docs/GettingStarted.tsx';
import AddEntry from './pages/docs/AddEntry.tsx';
import EditEntry from './pages/docs/EditEntry.tsx';

function DocRoutes() {
    return (
      <Routes>
        <Route path="getting-started" element={<GettingStarted />} />
        <Route path="add-entry" element={<AddEntry />} />
        <Route path="edit-entry" element={<EditEntry />} />
        {/* Add other doc routes here */}
      </Routes>
    );
  }
  
  export default DocRoutes;