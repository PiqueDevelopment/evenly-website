import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Make sure to import the Doc Pages to route to
import DocDownload from './pages/docs/Download.tsx';
import GettingStarted from './pages/docs/GettingStarted.tsx';
import AddEntry from './pages/docs/AddEntry.tsx';
import EditEntry from './pages/docs/EditEntry.tsx';
import FileUpload from './pages/docs/FileUpload.tsx';
import SplitTypes from './pages/docs/SplitTypes.tsx';
import Errors from './pages/docs/Errors.tsx';
import Changelog from './pages/docs/Changelog.tsx';
import Contribute from './pages/docs/Contribute.tsx';

function DocRoutes() {
    return (
      <Routes>
        <Route path="downloads" element={<DocDownload />} />
        <Route path="getting-started" element={<GettingStarted />} />
        <Route path="add-entry" element={<AddEntry />} />
        <Route path="edit-entry" element={<EditEntry />} />
        <Route path="file-upload" element={<FileUpload />} />
        <Route path="split-types" element={<SplitTypes />} />
        <Route path="errors" element={<Errors />} />
        <Route path="changelog" element={<Changelog />} />
        <Route path="contribute" element={<Contribute />} />
        {/* Add other doc routes here */}
      </Routes>
    );
  }
  
  export default DocRoutes;