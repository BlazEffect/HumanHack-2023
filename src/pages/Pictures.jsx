import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Title from "../components/UI/Title";

export default function Pictures() {
  const [pictures, setPictures] = useState(localStorage.getItem("images"));
  useEffect(() => {
    if (pictures && typeof pictures !== "object") {
      setPictures(JSON.parse(pictures));
    }
  }, []);
  return (
    <Layout>
      {Array.isArray(pictures) === "array" ? (
        <div className="flex flex-col text-[18px] text-center">
          <Title>Твои рисунки</Title>
          {pictures.map((picture, i) => (
            <div className="flex justify-between items-center m-2 border-black border-2">
              <span className="text-left pl-2">{`${
                i === 0 ? "Твой первый рисунок" : "Рисунок " + ++i
              } `}</span>
              <img className="max-w-[250px]" src={picture} alt={"Рисунок"} />
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
