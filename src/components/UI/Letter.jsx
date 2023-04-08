import React, { useRef } from "react";

const Letter = ({ letter, audio, setIncludedLetters, includedLetters }) => {
  const audioEl = useRef(null);

  const clickCard = () => {
    setIncludedLetters([...includedLetters, { letter: letter }]);
    audioEl.current.volume = 0.1;
    audioEl.current.play()
  }

  const playAudio = () => {
    audioEl.current.volume = 0.1;
    audioEl.current.play()
  }

  return (
    <>
      <div
        onClick={clickCard}
        className="bg-white w-10 min-h-[40px] flex items-center justify-center"
      >
        {letter}
      </div>
      {
        Object.keys(audio).map(item => item === letter && (
        <audio ref={audioEl} key={item}>
          <source
          /* TODO: replace src */
            src={audio[item]}
            type="audio/mpeg"
          />
        </audio>))
      }
    </>
  );
};

export default Letter;
