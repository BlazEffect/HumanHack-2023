import React, { useRef, useState } from 'react';

const Letter = ({ letter, audio, setIncludedLetters, includedLetters }) => {
  const clickCard = () => {
    const track = new URL(audio[letter], import.meta.url);
    const audioTrack = new Audio(track);
    audioTrack.volume = 1
    audioTrack.play()
    setIncludedLetters([...includedLetters, { letter: letter }]);
  };

  return (
    <>
      <div
        onClick={clickCard}
        className="bg-white w-10 min-h-[40px] flex items-center justify-center"
      >
        {letter}
      </div>
      
      
    </>
  );
};

export default Letter;
