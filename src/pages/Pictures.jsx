import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Title from '../components/UI/Title';

export default function Pictures() {
  const [pictures, setPictures] = useState(localStorage.getItem('images'));
  useEffect(() => {
    if (pictures && typeof pictures !== 'object') {
      setPictures(JSON.parse(pictures));
    }
  }, []);
  return (
    <Layout>
      {Array.isArray(pictures) ? (
        <div className="flex flex-col text-[18px] text-center">
          <Title>Твои рисунки</Title>
          {pictures.map((picture, i) => (
            <div key={i} className="justify-center flex-col flex items-center m-2 border-[#70B839] border-2">
              <span className="text-left text-lg pl-2">{`${
                i === 0 ? 'Твой первый рисунок' : 'Рисунок ' + ++i
              } `}</span>
              <img className="max-w-[250px] my-2" src={picture} alt={'Рисунок'}/>
            </div>
          ))}
        </div>
      ) : (
        <div className="">
          <Title>Рисунки не найдены</Title>
        </div>
      )}
    </Layout>
  );
}
