import React from 'react';
import DocLayout from '../../components/DocLayout.tsx';
import './Docs.css';

function EditEntry() {
  return (
    <DocLayout>
      <div className='spacer'/>
      <h1>Editing an Entry</h1>
      <p>Instructions to edit an entry.</p>
      <hr className='doc-divider' />
      <h2>Editing an Existing Event</h2>
      <div className='warning'>
        <h3>WARNING</h3>
        <p>It is vital that you are editing an entry with the correct Event sheet open. The program will attempt to edit information in whatever sheet you are looking at.</p>
        <p>You may only edit existing entries.</p>
      </div>
      <h3>Editing an Entry</h3>
      <p>Please note the specific Unique ID of the entry you would like to edit.</p>
      <p>Run the program by navigating to Bill Splitting &#x003E; Edit Entry.</p>
      <p>The program will prompt you to enter the Unique ID.</p>
      <hr className='doc-divider' />
      <h2>Filling out the Form</h2>
      <p>Upon entering the Unique ID, the program will then search and fill out the form with the existing information.</p>
      <p>Other than the information already being populated, the form will be the exact same as the Add Entry form:</p>
      <p>
        <ul>
          <li>Description &#x0028;Optional&#x0029;: The bill name and description. This is optional.</li>
          <li>Date &#x0028;Optional&#x0029;: The date of the bill. This is optional.</li>
          <li>Total Amount: The total amount of money &#x0028;$ Amount&#x0029; that was paid for the bill.</li>
          <li>Split Type: The split type of the bill. This can either be in <i>dollar amount</i> or by <i>percentage</i>.</li>
          <li>Members: Add the members who were involved with the bill by clicking on 'Add Member' and utilizing the dropdown menu.</li>
          <li>Who Paid: The person&#x0028;s&#x0029; who paid the bill initially. What they are owed will be calculated in 'Balance Split.' Please see the glossary.</li>
        </ul>
      </p>
      <hr className='doc-divider' />
      <h2>Submitting the Form</h2>
      <p>Once you have finished making your changes, please click on the "Submit" button.</p>
      <p>Upon form submission, the entry will take a moment before being updated with the submitted information.</p>
      <div className='spacer'/>
    </DocLayout>
  );
}

export default EditEntry;