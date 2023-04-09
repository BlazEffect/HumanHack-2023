import React, { useEffect, useRef, useState } from "react";
import Image from "./Image.jsx";
import ImageCell from "./ImageCell.jsx";
import Modal from "../../Modal.jsx";
import Button from "../../Button.jsx";

const Keyboard = ({ images, answer, setLevel }) => {
  const [includedImage, setIncludedImage] = useState();
  const [imageContent, setImageContent] = useState();

  const [final, setFinal] = useState(false);
  const [tryAgain, setTryAgain] = useState(false);

  useEffect(() => {
    if(final) {
      setLevel()
    }
  }, [final])

  useEffect(() => {
    const content = [];
    for (let i = 0; i < images?.length; i++) {
      content.push(
        <Image key={i} image={images[i]} setIncludedImage={setIncludedImage} />
      );
    }
    setImageContent(content);
  }, [images]);
  useEffect(() => {
    const filteredImages = images?.filter(image => image.path !== includedImage?.path);
    const content = [];
    for (let i = 0; i < images?.length; i++) {
        content.push(
          <Image key={i} image={filteredImages[i]} setIncludedImage={setIncludedImage} />
        );
      }
      setImageContent(content);
    if(includedImage?.path) {
        setTimeout(() => {
            includedImage.amount === answer ?
            setFinal(true) : setTryAgain(true);
        }, 1500)
    }

  }, [includedImage]);

  const restart = () => {
    setIncludedImage('');
    setTryAgain(false);
  }

  return (
    <div>
      <div className="bg-white w-max m-auto flex justify-center flex-wrap gap-1.5 py-[16px] px-[10px] rounded-[10px]">
        <ImageCell image={includedImage} />
      </div>

      <div className="letters-wrapper w-max m-auto mt-[15px] flex flex-wrap gap-1.5 justify-center text-center py-[16px] px-[10px] rounded-[10px]">
        {imageContent}
      </div>
      <Modal
        open={final}
        withOutTimer
        handleClose={() => setFinal(false)}
        title={"Молодец!"}
      >
        Ты успешно прошёл пример
        <Button handleClick={() => {setFinal(false); setIncludedImage('')}}>Продолжить</Button>
      </Modal>
      <Modal
        open={tryAgain}
        withOutTimer
        handleClose={() => setTryAgain(false)}
        title={"Молодец!"}
      >
        У тебя почти получилось, попытайся снова
        <Button handleClick={restart}>Начать заново</Button>
      </Modal>
    </div>
  );
};

export default Keyboard;
