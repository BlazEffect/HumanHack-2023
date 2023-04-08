import React, { useEffect, useRef, useState } from "react";
import Letter from "./Letter.jsx";
import { useDrag, useDrop } from "react-dnd";
import LetterCell from "./LetterCell.jsx";

const Keyboard = ({ word }) => {
  const [countLetters, setCountLetters] = useState(0);
  const [includedLetters, setLetters] = useState([]);

  const [{ isOver }, dropRef] = useDrop({
    accept: 'letter',
    drop: (item) => setLetters((basket) => 
                        !basket.includes(item) ? [...basket, item] : basket),
    collect: (monitor) => ({
        isOver: monitor.isOver()
    })
})

  useEffect(() => {
    setCountLetters(word?.split("").length);
  });

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const generateBoxes = () => {
    let content = [];
    for (let i = 0; i < countLetters; i++) {
      content.push(
        <LetterCell key={i}>{includedLetters[i]?.letter}</LetterCell>
      );
    }

    return content;
  };

  function generateBoxedLetters(word) {
    let content = [];
    const letters = word?.split("");
    

    for (let i = 0; i < countLetters; i++) {
      if(letters.includes(includedLetters[i]?.letter)) {
        letters[i] = ''
      }
      content.push(<Letter letter={letters[i]} key={i} />);
    }

    if (content.length === 2) {
      [content[0], content[1]] = [content[1], content[0]];
    } else {
      shuffle(content);
    }

    return content;
  }

  return (
    <div>
      <div ref={dropRef} className="bg-white w-max m-auto flex justify-center flex-wrap gap-1.5 py-[16px] px-[10px] rounded-[10px]">
        {generateBoxes()}
      </div>

        <div className="letters-wrapper w-max m-auto mt-[15px] flex flex-wrap gap-1.5 justify-center text-center py-[16px] px-[10px] rounded-[10px]">
          {generateBoxedLetters(word)}
        </div>
 
    </div>
  );
};

export default Keyboard;
