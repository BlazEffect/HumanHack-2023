import React, { useEffect, useMemo, useState } from 'react';
import Layout from '../components/Layout.jsx';

import data from '../data/alphabet.json';
import LevelCounter from '../components/UI/LevelCounter.jsx';
import Card from '../components/UI/Card.jsx';
import ImageCard from '../components/UI/ImageCard.jsx';
import Keyboard from '../components/UI/Keyboard.jsx';

const Alphabet = () => {
  const [level, setLevel] = useState(1);
  const [maxLevel, setMaxLevel] = useState(1);
  const [items, setItems] = useState([]);

  function saveSection(sectionName) {
    localStorage.setItem('section', sectionName);
  }

  useEffect(() => {
    const savedSection = localStorage.getItem('section');

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
  }, []);

  return (
    <Layout>
      <LevelCounter level={level} maxLevel={maxLevel}/>

      <Card>
        <ImageCard imagePath={'/src/assets/images/Alphabet/' + items.items?.[level - 1].imageName}/>
        <Keyboard
          audio={items.items?.[level-1].speech}
          finalAudio={items.items?.[level-1].final}
          word={items.items?.[level - 1].word}
        />
      </Card>

    </Layout>
  );
};

export default Alphabet;