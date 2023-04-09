import React, { useEffect, useMemo, useState } from "react";
import Layout from "../components/Layout.jsx";

import data from "../data/math.json";
import LevelCounter from "../components/UI/LevelCounter.jsx";
import Card from "../components/UI/Card.jsx";
import ImageCard from "../components/UI/ImageCard.jsx";
import Keyboard from "../components/UI/MathPage/Keyboard.jsx";

const MathPage = () => {
  const [level, setLevel] = useState(+localStorage.getItem('level-math') ?? 1);
  const [sign, setSign] = useState();
  const [maxLevel, setMaxLevel] = useState(1);
  const [items, setItems] = useState([]);
  const [answer, setAnswer] = useState();
  const [final, setFinal] = useState();

  function saveSection(sectionName) {
    localStorage.setItem("section-math", sectionName);
  }

  function nextLevel() {
    if(+level + 1 > maxLevel) {
      setFinal(true);
      console.log(level + 1, maxLevel)
      return;
    }
    setLevel(+level + 1);
    saveLevel(+level + 1);
  }

  function saveLevel(level) {
    localStorage.setItem('level-math', level);
  }

  function saveSection(sectionName) {
    localStorage.setItem('section', sectionName);
  }

  useEffect(() => {
    const savedSection = localStorage.getItem("section-math");
    const savedLevel = localStorage.getItem('level-math')
    if (!savedSection) {
      const number = Math.floor(Math.random() * data.length);
      const section = data[number];
      setItems(section);
      setMaxLevel(section.maxLevels);
      saveSection(section.name);

    } else {
      const sectionIndex = data
        .map((section) => {
          return section.name;
        })
        .indexOf(savedSection);
      setItems(data[sectionIndex]);
      setMaxLevel(data[sectionIndex].maxLevels);
    }

    const images = items.items?.[level - 1]?.images;
    if (images) {
      images[0].amount > images[1].amount ? setSign("-") : setSign("+");
      /* важное условие - первое число всегда больше второго */
      if(images[0].amount === images[1].amount) {
        setAnswer(images[0].amount + images[1].amount)
      }
      if(images[0].amount > images[1].amount) {
        setAnswer(images[0].amount - images[1].amount)
      }

    }
    if (savedLevel) {
      setLevel(parseInt(savedLevel));
    }
  });

  return (
    <Layout>
      <LevelCounter level={level} maxLevel={maxLevel} />

      <Card>
        <div className="flex items-center relative mx-4 justify-between h-30">
          {items.items?.[level - 1].images.map((image, i) => (
              <React.Fragment key={i}>
                  {i === 1 && (
                    <div className="text-[#70B839] flex text-[100px] mb-6 xs:mb-0">
                      {sign}
                    </div>
                  )}
                <ImageCard
                  small
                  imagePath={"/math/" + image.path}
                />
              </React.Fragment>
          ))}
        </div>
        <Keyboard setLevel={nextLevel} answer={answer} images={items.items?.[level - 1].imagesPrimer} />
      </Card>
    </Layout>
  );
};

export default MathPage;
