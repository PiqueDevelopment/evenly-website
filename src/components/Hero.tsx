import React from 'react'
import { Button } from './Button.tsx';


function Hero() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-2.mp4' autoPlay loop muted />
        <h1>Bill splitting, done simply.</h1>
        <p1>Download today!</p1>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get Evenly</Button>
        </div>
    </div>
  );
}

export default Hero;