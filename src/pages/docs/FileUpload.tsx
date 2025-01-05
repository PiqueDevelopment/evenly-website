import React from 'react';
import DocLayout from '../../components/DocLayout.tsx';
import './Docs.css';

function FileUpload() {
  return (
    <DocLayout>
      <div className='spacer'/>
      <h1>File Upload</h1>
      <p>Instructions to upload a file to an entry.</p>
      <hr className='doc-divider' />
      <h2>Locating the Folder</h2>
      <p>Upon adding an entry, a Google Drive folder will automatically be generated on the Google Account the entry was added on.</p>
      <p>By default, this folder will be available for public access &#x0028;anyone with a link&#x0029;.</p>
      <p>Navigate to the Google Drive folder by opening the link.</p>
      <p>The default file path is My Drive &#x003E; Google Sheets Name &#x003E; Event Sheet Name &#x003E; Unique ID.</p>
      <hr className='doc-divider' />
      <h2>Uploading Files</h2>
      <p>You may upload receipts, files, documents, etc. pertaining to the event by simply dragging and dropping a file into the folder.</p>
      <p>Alternatively, you can click on New &#x003E; File Upload and select files to upload to the folder.</p>
      <div className='warning'>
        <h3>WARNING</h3>
        <p>By default, anyone with the link may access and view the contents of this folder.</p>
        <p>Do not upload sensitive information to these folders, as people who have access to the Event Sheet will also have access to the folders.</p>
      </div>
      <div className='spacer'/>
    </DocLayout>
  );
}

export default FileUpload;