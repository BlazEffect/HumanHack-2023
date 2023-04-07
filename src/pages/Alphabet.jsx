import React, { useEffect, useMemo, useState } from 'react';
import Layout from '../components/Layout.jsx';

import data from '../data/alphabet.json';

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
      <div className="text-center">
        <span>Уровень {level}/{maxLevel}</span>
      </div>
    </Layout>
  );
};

export default Alphabet;