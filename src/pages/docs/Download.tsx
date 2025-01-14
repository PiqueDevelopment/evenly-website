import React from 'react';
import DocLayout from '../../components/DocLayout.tsx';
import './Docs.css';
import { Button } from '../../components/Button.tsx';
import '../../components/Button.css';

function DocDownload() {
  return (
    <DocLayout>
      <div className='spacer'/>
      <h1>Download</h1>
      <p>The latest stable version of Evenly was released on 01/25/2025.</p>
      <p>The Google Apps Script is available via copying the template Google Spreadsheet. See below.</p>
      <div className='download-btns'>
        <Button to='https://docs.google.com/spreadsheets/d/1ZwQydIuDscUfn_xbbTTBvyWUKxNd-zq6LInzsaIVC6U/edit?usp=drive_link' className='btn-docs-download' buttonStyle='btn--outline' buttonSize='btn--medium' target='_blank' rel='noopener noreferrer'>
          Download 
        </Button>
      </div>
      <div className='spacer'/> 
      <div className="changelog">
        <h3>Changelog (v1.2.0)</h3>
        <p>
          <ul className='changelog-list'>
              <li>The first functional version of Evenly is released.</li>
              <li>Added the ability to download the Google Apps Script.</li>
              <li>Added several new error checks.</li>
              <li>Several bug fixes have been introduced.</li>
              <li>Add and edit features have been fully implemented.</li>
          </ul>
        </p>
      </div>
    </DocLayout>
  );
}

export default DocDownload;