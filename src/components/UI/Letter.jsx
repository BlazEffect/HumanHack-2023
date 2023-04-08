import React, { useRef, useEffect, useState } from "react";
import { useDrag } from "react-dnd";

const Letter = ({ letter, index, audio }) => {
  const audioEl = useRef(null);
  
  const [{ isDragging }, dragRef] = useDrag({
    type: "letter",
    item: { letter, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const playAudio = () => {
    audioEl.current.volume = 0.1;
    audioEl.current.play()
  }

  return (
    <>
      <div
        draggable
        onClick={playAudio}
        ref={dragRef}
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
