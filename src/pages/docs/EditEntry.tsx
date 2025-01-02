import React from 'react';
import DocNavbar from '../../components/DocNavbar.tsx';
import './Docs.css';

function EditEntry() {
  return (
    <div className='container'>
        <DocNavbar />
        <div className='doc-content'>
          <h1>Editing an Entry</h1>
          <p>Welcome to the Edit Entry guide.</p>
        </div>
    </div>
  );
}

export default EditEntry;