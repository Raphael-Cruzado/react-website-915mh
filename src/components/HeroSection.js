import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';
import './HeroSection.css';
import myVideo from '../videos/video-2.mp4';

function HeroSection() {

  const theVideo = document.getElementById('videoId');
  console.log(theVideo);

  return (
    <div className='hero-container'>
      <video id='videoId' src={myVideo} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
          <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
              GET STARTED
          </Button>
          <Button className='btns' buttonStyle='btn-primary' buttonSize='btn--large'>
              WATCH TRAILER <FontAwesomeIcon icon={faPlayCircle} />
          </Button>
      </div>
    </div>
  );
}

export default HeroSection;