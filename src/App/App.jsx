import React, { useState, useEffect } from 'react';
import './app.css';
import soundA from '../sounds/sintezator-effekt-19.mp3';
import soundS from '../sounds/sintezator-odinochnyiy-9.mp3';
import soundD from '../sounds/sintezator-odinochnyiy.mp3';

const App = () => {
  const [currentSound, setCurrentSound] = useState(null);

  const playSound = (sound) => {
    if (currentSound) {
      currentSound.pause();
      currentSound.currentTime = 0; 
    }

    const audio = new Audio(sound);
    audio.play();
    setCurrentSound(audio);
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'a':
        playSound(soundA);
        break;
      case 's':
        playSound(soundS);
        break;
      case 'd':
        playSound(soundD);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSound, soundA, soundS, soundD]);

  return (
    <body className='body'>
      <div className='container'>
        <button className='button' onClick={() => playSound(soundA)}>
          A
        </button>
        <button className='button' onClick={() => playSound(soundS)}>
          S
        </button>
        <button className='button' onClick={() => playSound(soundD)}>
          D
        </button>
      </div>
    </body>
  );
};

export default App;
