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

  useEffect(() => {
    const number = Math.floor(Math.random() * data.length);
    setItems(data[number]);
    setMaxLevel(data[number].maxLevels);
  }, []);

  return (
    <Layout>
      <LevelCounter level={level} maxLevel={maxLevel} />

      <Card>
        <ImageCard imagePath={"/public/img/Alphabet/" + items.items?.[level - 1].imageName}/>

        <Keyboard word={items.items?.[level - 1].word}/>
      </Card>

    </Layout>
  );
};

export default Alphabet;