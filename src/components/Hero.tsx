import React from 'react';
import '../App.css';
import { Button } from './Button.tsx';
import './Hero.css';

function Hero() {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className='hero-container'>
      {!isMobile && (
        <video src={process.env.PUBLIC_URL + '/videos/evenly.mp4'} autoPlay loop muted />
      )}
      <h1>Evenly</h1>
      <h2>Bill splitting, done simply.</h2>
      <p>
        Split bills, track expenses, settle balances - all natively within your Google Sheets.
      </p>
      <div className='hero-btns'>
        <Button to='/docs/getting-started' className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</Button>
        <Button to='/docs/downloads' className='btns' buttonStyle='btn--download' buttonSize='btn--large'>Download <i className="fa fa-download"/> </Button>
      </div>
    </div>
  );
}

export default Hero;