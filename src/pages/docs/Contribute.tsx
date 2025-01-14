import React from 'react';
import DocLayout from '../../components/DocLayout.tsx';
import './Docs.css';

function Contribute() {
  return (
    <DocLayout>
      <div className='spacer'/>
      <h1>Contribute</h1>
      <p>Learn how to contribute to Evenly.</p>
      <hr className='doc-divider' />
      <h2>How do I contribute?</h2>
      <p>We welcome contributions to enhance and improve the Evenly app!</p>
      <p>Our code is, and always will be, free and open-source. Please see our <a href='https://github.com/PiqueDevelopment/evenly'>GitHub Repository</a>.</p>
      <p>If you're interested in contributing, please fork the repository, make your changes, and submit a pull request.</p>
      <div className='spacer'/> 
    </DocLayout>
  );
}

export default Contribute;