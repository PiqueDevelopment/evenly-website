import React from 'react';
import DocLayout from '../../components/DocLayout.tsx';
import './Docs.css';

function AddEntry() {
  return (
    <DocLayout>
      <div className='spacer'/>
      <h1>Adding an Entry</h1>
      <p>Instructions to add an entry.</p>
      <hr className='doc-divider' />
      <h2>Creating a New Event</h2>
      <h3>Adding a New Sheet</h3>
      <p>For each event, you may create a new Google Sheet to store billing records for that event.</p>
      <p>
        <ul>
            <li>To create a new event, you may add a new sheet to the document &#x0028;by clicking on the bottom right corner '+' button&#x0029;.</li>
            <li>You may rename the sheet to any Event name. Please keep in mind that you cannot change this later.</li>
        </ul>
      </p>
      <hr className='doc-divider' />
      <h2>Adding the First Entry</h2>
      <p>Run the program by navigating to Bill Splitting &#x003E; Add Entry.</p>
      <div className='warning'>
        <h3>WARNING</h3>
        <p>It is vital that you are adding an entry with the correct Event sheet open. The program will attempt to insert information into whatever sheet you are looking at.</p>
      </div>
      <h3>Filling out the Form</h3>
      <p>You will be greeted with a menu prompting for the following:</p>
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
      <h3>Submitting the Form</h3>
      <p>Upon form submission, the entry will take a moment to be entered into the Google Sheet, along with a Unique ID and automated formatting.</p>
      <p>This entry will now be available to edit through the Edit Entry feature.</p>
      <div className='spacer'/>
    </DocLayout>
  );
}

export default AddEntry;