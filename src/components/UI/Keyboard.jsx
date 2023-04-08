import React, { useEffect, useRef, useState } from 'react';
import Letter from './Letter.jsx';
import LetterCell from './LetterCell.jsx';
import Modal from '../Modal.jsx';

const Keyboard = ({ word, audio, finalAudio }) => {
  const [countLetters, setCountLetters] = useState(0);
  const [letters, setLetters] = useState([]);
  const [lettersContent, setLettersContent] = useState([]);
  const [includedLetters, setIncludedLetters] = useState([]);
  const [final, setFinal] = useState(false);
  const [tryAgain, setTryAgain] = useState(false);

  const [letterBox, setLetterBox] = useState([]);

  const audioEl = useRef(null);

  useEffect(() => {
    let letters = word?.split('');
    let letterBoxContent = [];
    let letterContent = [];

    if (letters?.length === 2) {
      [letters[0], letters[1]] = [letters[1], letters[0]];
    } else {
      shuffle(letters);
    }

    for (let i = 0; i < letters?.length; i++) {
      letterBoxContent.push(<LetterCell key={i} letter={includedLetters[i]?.letter}></LetterCell>);
    }

    for (let i = 0; i < letters?.length; i++) {
      letterContent.push(<Letter audio={audio} final={finalAudio} letter={letters[i]} key={i} index={i} setIncludedLetters={setIncludedLetters} includedLetters={includedLetters}/>);
    }

    setCountLetters(letters?.length);
    setLetterBox(letterBoxContent);
    setLettersContent(letterContent);
    setLetters(letters);
  }, [word]);

  useEffect(() => {
    let letterBoxContent = [];
    let letterContent = [];

    for (let i = 0; i < countLetters; i++) {
      letterBoxContent.push(<LetterCell key={i} letter={includedLetters[i]?.letter}></LetterCell>);
    }

    const includeLetter = includedLetters.map((item) => item.letter);
    const updatedLetters = letters?.filter((letter) => !includeLetter.includes(letter[0]));

    for (let i = 0; i < updatedLetters?.length; i++) {
      letterContent.push(<Letter audio={audio} final={finalAudio} letter={updatedLetters[i]} key={i} index={i} setIncludedLetters={setIncludedLetters} includedLetters={includedLetters}/>);
    }

    setLetterBox(letterBoxContent);
    setLettersContent(letterContent);
    setLetters(updatedLetters);

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

  const setIncludedLetter = (index, arrLetters) => {
    console.log(arrLetters);
    setIncludedLetters([...includedLetters, { letter: arrLetters[index] }]);
  }

  function playFinalAudio() {
    console.log(audioEl, audioEl.current.play());
  }

  function shuffle(array) {
    for (let i = array?.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  return (
    <div>
      <div className="bg-white w-max m-auto flex justify-center flex-wrap gap-1.5 py-[16px] px-[10px] rounded-[10px]">
        {letterBox}
      </div>

      <div className="letters-wrapper w-max m-auto mt-[15px] flex flex-wrap gap-1.5 justify-center text-center py-[16px] px-[10px] rounded-[10px]"
      >
        {lettersContent}
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
