import React from 'react';
import DocLayout from '../../components/DocLayout.tsx';
import './Docs.css';

function Changelog() {
  return (
    <DocLayout>
      <div className='spacer'/>
      <h1>Changelog</h1>
      <p>Version releases and changes of Evenly.</p>
      <hr className='doc-divider' />
      <h3>Version v1.2.0</h3>
      <p>
        <ul className='changelog-list'>
            <li>The first functional version of Evenly is released.</li>
            <li>Added the ability to download the Google Apps Script.</li>
            <li>Added several new error checks.</li>
            <li>Several bug fixes have been introduced.</li>
            <li>Add and edit features have been fully implemented.</li>
        </ul>
      </p>
      <h3>Version v1.0.1</h3>
      <p>
        <ul className='changelog-list'>
            <li>QoL features implemented (Dropdown lists, basic error checking, etc.)</li>
            <li>Edit Feature implemented</li>
            <li>People List requirement.</li>
        </ul>
      </p>
      <div className='spacer'/> 

    </DocLayout>
  );
}

export default Changelog;