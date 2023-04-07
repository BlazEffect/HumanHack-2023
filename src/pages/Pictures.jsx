import { useState, useEffect } from "react";
import Layout from "../components/Layout";

export default function Pictures() {
  const [pictures, setPictures] = useState(localStorage.getItem("images"));
  useEffect(() => {
    if (pictures && typeof(pictures) !== 'object') {
      setPictures(JSON.parse(pictures));
    }
  }, []);
  return (
    <Layout>
      {typeof(pictures) === 'object' ? (
        <div className="flex flex-col text-[18px] text-center">
            <h2>Твои рисунки</h2>
          {pictures.map((picture, i) => (
            <div className="flex justify-between items-center m-2 border-black border-2">
                <span className="text-left pl-2">{`${i === 0 ? 'Твой первый рисунок' : 'Рисунок ' + (++i)} `}</span>
                <img className="max-w-[250px]" src={picture} alt={'Рисунок'} />
            </div>
          ))}
        </div>
      ) : (
        <h2>Рисунки не найдены</h2>
      )}
    </Layout>
  );
}
