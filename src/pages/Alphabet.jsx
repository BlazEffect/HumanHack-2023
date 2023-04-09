import React, { useEffect, useMemo, useState } from 'react';
import Layout from '../components/Layout.jsx';

import data from '../data/alphabet.json';
import LevelCounter from '../components/UI/LevelCounter.jsx';
import Card from '../components/UI/Card.jsx';
import ImageCard from '../components/UI/ImageCard.jsx';
import Keyboard from '../components/UI/Keyboard.jsx';
import Modal from '../components/Modal.jsx';
import Button from '../components/Button.jsx';
import { Link } from 'react-router-dom';

const Alphabet = () => {
  const [level, setLevel] = useState(1);
  const [maxLevel, setMaxLevel] = useState(1);
  const [items, setItems] = useState([]);
  const [final, setFinal] = useState(false)

  function nextLevel() {
    if (level + 1 <= maxLevel) {
      setLevel(level + 1);
      saveLevel(level + 1);
    } else {
      setFinal(true)
    }
  }

  function saveLevel(level) {
    localStorage.setItem('level', level);
  }

  function saveSection(sectionName) {
    localStorage.setItem('section', sectionName);
  }

  useEffect(() => {
    const savedSection = localStorage.getItem('section');
    const savedLevel = localStorage.getItem('level');

    if (!savedSection) {
      const number = Math.floor(Math.random() * data.length);
      const section = data[number];
      setItems(section);
      setMaxLevel(section.maxLevels);

      saveSection(section.name);
    } else {
      const sectionIndex = data.map((section) => { return section.name; }).indexOf(savedSection);
      setItems(data[sectionIndex]);
      setMaxLevel(data[sectionIndex].maxLevels);
    }

    if (savedLevel) {
      setLevel(parseInt(savedLevel));
    }
  }, []);

  return (
    <Layout>
      <LevelCounter level={level} maxLevel={maxLevel}/>

      <Card>
        <ImageCard imagePath={'/alphabet/' + items.items?.[level - 1].imageName}/>
        <Keyboard
          audio={items.items?.[level - 1].speech}
          finalAudio={items.items?.[level - 1].final}
          word={items.items?.[level - 1].word}
          setLevel={nextLevel}
        />
      </Card>
      <Modal title={'Вы успешно завершили все уроки!'} open={final} handleClose={() => setFinal(false)}>
        Поздравляю, ты справился!
        <Button>
          <Link to='/'>Вернуться на главную</Link>
        </Button>
      </Modal>
    </Layout>
  );
};

export default Alphabet;