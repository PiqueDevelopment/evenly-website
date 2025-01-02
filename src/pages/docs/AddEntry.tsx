import React from 'react';
import DocNavbar from '../../components/DocNavbar.tsx';
import './Docs.css';

function AddEntry() {
  return (
    <div className='container'>
        <DocNavbar />
        <div className='doc-content'>
          <h1>Adding a Entry</h1>
          <p>Welcome to the Adding Entry guide.</p>
        </div>
    </div>
  );
}

export default AddEntry;