import React from 'react';
import DocLayout from '../../components/DocLayout.tsx';
import './Docs.css';

function Errors() {
  return (
    <DocLayout>
      <div className='spacer'/>
      <h1>Errors and Troubleshooting</h1>
      <p>A guide to errors you may encounter while using our program.</p>
      <hr className='doc-divider' />
      <h2>Form Submission</h2>
      <h3>Requirements</h3>
      <p>The program is strict on what should be in the forms. This includes the following:</p>
      <p>
        <ul>
          <li>The dollar amount amongst all contributors must sum to EXACTLY the total amount.</li>
          <li>The percent amount amongst all contributors must sum to EXACTLY 100&#x25;.</li>
          <li>There must be at least one member in the form.</li>
          <li>There must be at least one member under the "Who Paid" section of the form.</li>
          <li>Total "Who Paid" members summed together MUST equal the Total Amount.</li>
        </ul>
      </p>
      <h3>Other Bugs</h3>
      <p>Should you encounter any issues when running our code, please don't hestitate to reach out to us at piquedevelopment@gmail.com.</p>
      <div className='spacer'/>
    </DocLayout>
  );
}

export default Errors;