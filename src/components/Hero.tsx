import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { Button } from './Button.tsx'
import './Hero.css'


function Hero() {
  return (
    <div className='hero-container'>
        {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
        <h1>Bill splitting, done simply.</h1>
        <p>Download today!</p>
        <div className='hero-btns'>
            <Button to='/docs' className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</Button>
            <Button to='/download' className='btns' buttonStyle='btn--download' buttonSize='btn--large'>Download <i className="fa fa-download" /> </Button>
        </div>
    </div>
  );
}

export default Hero;