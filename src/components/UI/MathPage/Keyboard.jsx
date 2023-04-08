import React, { useEffect, useRef, useState } from "react";
import Image from "./Image.jsx";
import ImageCell from "./ImageCell.jsx";
import Modal from "../../Modal.jsx";
import Button from "../../Button.jsx";

const Keyboard = ({ images, answer }) => {
  const [includedImage, setIncludedImage] = useState();
  const [imageContent, setImageContent] = useState();

  const [final, setFinal] = useState(false);
  const [tryAgain, setTryAgain] = useState(false);
  useEffect(() => {
    const content = [];
    for (let i = 0; i < images?.length; i++) {
      content.push(
        <Image image={images[i]} setIncludedImage={setIncludedImage} />
      );
    }
    setImageContent(content);
  }, [images]);
  useEffect(() => {
    const filteredImages = images?.filter(image => image.path !== includedImage?.path);
    const content = [];
    for (let i = 0; i < images?.length; i++) {
        content.push(
          <Image image={filteredImages[i]} setIncludedImage={setIncludedImage} />
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
        handleClose={() => setFinal(false)}
        title={"Молодец!"}
      >
        Ты успешно выучил слово
      </Modal>
      <Modal
        open={tryAgain}
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
