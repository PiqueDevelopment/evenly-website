import React from 'react';
import DocNavbar from '../../components/DocNavbar.tsx';
import './Docs.css';

function GettingStarted() {
  return (
    <div className='container'>
        <DocNavbar />
        <div className='doc-content'>
          <div className='spacer'/>
          <h1>Getting Started</h1>
          <p>Essential information to get you started with Evenly.</p>
          <hr className='doc-divider' />
          <h2>Installation Guide</h2>
          <p>There are two ways you can use to set up Evenly.</p>
          <h3>Cloning Google Sheets</h3>
          <p>
            <ul>
              <li>Visit this Google Sheets to access the latest version of Evenly.</li>
              <li>Ensure you are signed into the Google Account you would like to use.</li>
              <li>At the top, click on File &#x003E; Make a Copy. Select the location of where you want to save the file and then click on 'Make a Copy' at the bottom.</li>
              <li>Open the copied file.</li>
            </ul>
          </p>
          <h3>Google App Marketplace Extension</h3>
          <p>
            <ul>
              <li>Instructions for this will soon be available.</li>
            </ul>
          </p>
          <hr className='doc-divider' />
          <h2>Additional Setup</h2>
          <h3>Authorization</h3>
          <p>If this is your first time running the program, please navigate to a new Sheet. Then, click on Bill Splitting &#x003E; Add Entry and follow the prompts to authorize the script to run on your Google Account.</p>
          <div className="warning">
            <h3>WARNING</h3>
            <p>Ensure that there exists a sheet titled EXACTLY 'People', with individuals from your organization listed by Name and Email.</p>
            <p>
              <ul>
                <li>If cloned from a Google Sheet, the 'People' sheet will already be provided.</li>
                <li>Otherwise, you will have to create the sheet yourself.</li>
              </ul>
            </p>
          </div>
          <div className='spacer'/>
        </div>
    </div>
  );
}

export default GettingStarted;