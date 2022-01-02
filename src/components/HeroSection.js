import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Video1 from './videos/video1.mp4';

function HeroSection ()  {
  return (
    <div className='hero-container'>
      <video autoPlay loop muted >
        <source src={Video1} type='video/mp4'/>
      </video>
      
    </div>
  );
}

export default HeroSection;