import React, { useEffect, useRef, useState } from 'react';
import Letter from './Letter.jsx';
import LetterCell from './LetterCell.jsx';
import Modal from '../Modal.jsx';

const Keyboard = ({ word, audio, finalAudio }) => {
  const [countLetters, setCountLetters] = useState(0);
  const [letters, setLetters] = useState([]);
  const [includedLetters, setIncludedLetters] = useState([]);
  const [final, setFinal] = useState(false);
  const [tryAgain, setTryAgain] = useState(false);

  const [letterBox, setLetterBox] = useState([]);

  const audioEl = useRef(null);

  useEffect(() => {
    let letters = word?.split('');
    let content = [];

    for (let i = 0; i < letters?.length; i++) {
      content.push(<LetterCell key={i} letter={includedLetters[i]?.letter}></LetterCell>);
    }

    if (letters?.length === 2) {
      [letters[0], letters[1]] = [letters[1], letters[0]];
    } else {
      shuffle(letters);
    }

    setCountLetters(letters?.length);
    setLetterBox(content);
    setLetters(letters);
  }, [word]);

  useEffect(() => {
    let content = [];

    for (let i = 0; i < countLetters; i++) {
      content.push(<LetterCell key={i} letter={includedLetters[i]?.letter}></LetterCell>);
    }

    setLetterBox(content);

    if (includedLetters.length === word?.split('').length) {
      const included = includedLetters.map(letter => letter.letter).join('');

      if (included === word) {
        /* playFinalAudio(); -> doesnt work??? TODO TODO  */
        setFinal(true);
      } else {
        setTryAgain(true);
      }

    }
  }, [includedLetters]);

  function playFinalAudio() {
    console.log(audioEl, audioEl.current.play());
  }

  function addLetter(index) {
    setIncludedLetters([...includedLetters, {letter: letters[index]}]);
  }

  function shuffle(array) {
    for (let i = array?.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function generateBoxedLetters(word) {
    let content = [];
    let letters = word?.split('');

    const includeLetter = includedLetters.map((item) => item.letter);
    letters = letters?.filter((letter) => !includeLetter.includes(letter[0]));

    if (letters?.length === countLetters) {
      if (letters?.length === 2) {
        [letters[0], letters[1]] = [letters[1], letters[0]];
      } else {
        shuffle(letters);
      }
    }

    for (let i = 0; i < letters?.length; i++) {
      content.push(<Letter audio={audio} final={finalAudio} letter={letters[i]} key={i} index={i} addLetter={addLetter}/>);
    }

    return content;
  }

  return (
    <div>
      <div className="bg-white w-max m-auto flex justify-center flex-wrap gap-1.5 py-[16px] px-[10px] rounded-[10px]">
        {letterBox}
      </div>

      <div className="letters-wrapper w-max m-auto mt-[15px] flex flex-wrap gap-1.5 justify-center text-center py-[16px] px-[10px] rounded-[10px]"
      >
        {generateBoxedLetters(word)}
      </div>

      <audio id="finalAudio" ref={audioEl}>
        <source src={finalAudio} type="audio/mpeg"/>
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
