import React, { useEffect, useState } from 'react';
import Letter from './Letter.jsx';

const Keyboard = ({ word }) => {
  const [countLetters, setCountLetters] = useState(0);

  useEffect(() => {
    setCountLetters(word?.split('').length);
  }, [word]);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const generateBoxes = () => {
    let content = [];

    for (let i = 0; i < countLetters; i++) {
      content.push(<div className="bg-[#ccc] w-10 h-10" key={i}></div>);
    }

    return content;
  }

  function generateBoxedLetters(word) {
    let content = [];
    const letters = word?.split('');

    for (let i = 0; i < countLetters; i++) {
      content.push(<Letter letter={letters[i]} key={i}/>);
    }

    if (content.length === 2) {
      [content[0], content[1]] = [content[1], content[0]];
    } else {
      content = shuffle(content);
    }

    return content;
  }

  return (
    <div>
      <div className="bg-white w-3/4 m-auto flex justify-center flex-wrap gap-1.5 mt-10">
        {generateBoxes()}
      </div>

      <div className="bg-[#ccc] w-100 mt-10 flex flex-wrap gap-1.5 justify-center text-center py-10">
        {generateBoxedLetters(word)}
      </div>
    </div>
  );
};

export default Keyboard;