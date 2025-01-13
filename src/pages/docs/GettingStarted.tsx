import React from 'react';
import DocLayout from '../../components/DocLayout.tsx';
import './Docs.css';

function GettingStarted() {
  return (
    <DocLayout>
      <div className='spacer'/>
      <h1>Getting Started</h1>
      <p>Essential information to get you started with Evenly.</p>
      <hr className='doc-divider' />
      <h2>Installation Guide</h2>
      <p>To install Evenly, you can clone from the <a href="https://docs.google.com/spreadsheets/d/1ZwQydIuDscUfn_xbbTTBvyWUKxNd-zq6LInzsaIVC6U/edit?usp=sharing">master copy of the Google Sheets</a>.</p>
      <h3>Cloning Google Sheets</h3>
      <p>
        <ul>
          <li>In your browser, ensure you are signed into the Google Account you would like to use.</li>
          <li>Visit this Google Sheets to access the latest version of Evenly.</li>
          <li>At the top, click on File &#x003E; Make a Copy. Select the location of where you want to save the file and then click on 'Make a Copy' at the bottom.</li>
          <li>Enter a unique name. It is highly recommended to replace this template name, as you may not change it later.</li>
          <li>Save it to anywhere on your Google Drive.</li>
          <li>Open the copied file.</li>
        </ul>
      </p>
      {/* <h3>Google App Marketplace Extension</h3>
      <p>
        <ul>
          <li>Instructions for this will soon be available.</li>
        </ul>
      </p> */}
      <hr className='doc-divider' />
      <h2>Additional Setup</h2>
      <h3>Rename Sheet Names</h3>
      <p>Renaming the Google Spreadsheet and the subsequent Event sheets is recommended.</p>
      <p>This is because the file path the receipts will save will depend entirely on the names of the sheet and event.</p>
      <p>Do NOT rename the 'People' sheet.</p>
      <h3>Adding People into the Spreadsheet</h3>
      <p>You can add people underneath the first row by entering their names and emails in their respective columns.</p>
      <p>Example:</p>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
        <tr>
          <td>Bob</td>
          <td>thegreatestbob@gmail.com</td>
        </tr>
        <tr>
          <td>Bill</td>
          <td>billthegill@gmail.com</td>
        </tr>
      </table>
      <h3>Authorization</h3>
      <p>If this is your first time running the program:</p>
      <p>
        <ul>
          <li>Please navigate to a new Sheet. Name that Sheet suitable for a specific Event. You cannot change this later.</li>
          <li>Click on Bill Splitting &#x003E; Add Entry.</li>
          <li>A pop up will display, requiring authorization. Please click on 'OK' to proceed.</li>
          <li>A new window will pop up. Please select the current Google Account you are using with the program.</li>
          <li>Google will claim that it has not verified the app. Please click on 'Advanced' &#x003E; 'Go to Master Copy Evenly Script (unsafe)'.</li>
        </ul>
      </p>
      <div className="warning">
        <h3>WARNING</h3>
        <p>Ensure that there exists a sheet titled EXACTLY 'People' with individuals from your organization listed by Name and Email.</p>
        <p>Do not modify the 'People' sheet name.</p>
        {/* <p>
          <ul>
            <li>If cloned from a Google Sheet, the 'People' sheet will already be provided.</li>
            <li>Otherwise, you will have to create the sheet yourself.</li>
          </ul>
        </p> */}
      </div>
      <div className='spacer'/>
      </DocLayout>
  );
}

export default GettingStarted;