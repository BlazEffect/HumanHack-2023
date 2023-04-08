import React, { useEffect, useRef, useState } from "react";
import Letter from "./Letter.jsx";
import { useDrag, useDrop } from "react-dnd";
import LetterCell from "./LetterCell.jsx";
import Modal from '../Modal.jsx';

const Keyboard = ({ word, audio, finalAudio }) => {
  const [countLetters, setCountLetters] = useState(0);
  const [includedLetters, setLetters] = useState([]);
  const [final, setFinal] = useState(false);
  const [tryAgain, setTryAgain] = useState(false);

  const audioEl = useRef(null);
  
  const [{ isOver }, dropRef] = useDrop({
    accept: "letter",
    drop: (item) =>
      setLetters((basket) =>
        !basket.includes(item) ? [...basket, item] : basket
      ),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const [{ isOverBack }, dropBackRef] = useDrop({
    accept: "letter-back",
    drop: (item) => {
      console.log(item);
      setLetters((basket) =>
        basket.filter((bask) => bask.letter !== item.letter)
      );
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  useEffect(() => {
    setCountLetters(word?.split("").length);
  });

  useEffect(() => {
    if(includedLetters.length === word?.split.length) {
      const included = includedLetters.map(letter => letter.letter).join('');
      if(included === word) {
        /* playFinalAudio(); -> doesnt work??? TODO TODO  */ 
        setFinal(true);
      } else {
        setTryAgain(true);
      }
      
    }
  }, [includedLetters])

  function playFinalAudio() {
    console.log(audioEl, audioEl.current.play())
  }

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
        <LetterCell key={i} letter={includedLetters[i]?.letter}></LetterCell>
      );
    }

    return content;
  };

  function generateBoxedLetters(word) {
    let content = [];
    let letters = word?.split("");
    const includeLetter = includedLetters.map((item) => item.letter);
    letters = letters?.filter((letter) =>
      includeLetter.includes(letter[0]) ? false : true
    );

    for (let i = 0; i < countLetters; i++) {
      content.push(<Letter index={i} audio={audio} final={finalAudio} letter={letters[i]} key={i} />);
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
      <div
        ref={dropRef}
        className="bg-white w-max m-auto flex justify-center flex-wrap gap-1.5 py-[16px] px-[10px] rounded-[10px]"
      >
        {generateBoxes()}
      </div>

      <div
        ref={dropBackRef}
        className="letters-wrapper w-max m-auto mt-[15px] flex flex-wrap gap-1.5 justify-center text-center py-[16px] px-[10px] rounded-[10px]"
      >
        {generateBoxedLetters(word)}
      </div>
      <audio id="finalAudio" ref={audioEl}>
        <source src={finalAudio} type='audio/mpeg' />
      </audio>
      <Modal open={final} handleClose={() => setFinal(false)} title={'Молодец!'}> 
        Ты успешно выучил слово {word}
      </Modal>
      <Modal open={tryAgain} handleClose={() => setTryAgain(false)} title={'Молодец!'}> 
        У тебя почти получилось, попытайся снова
      </Modal>
    </div>
  );
};

export default Keyboard;
