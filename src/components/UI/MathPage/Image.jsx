import React from "react";

const Image = ({ image, setIncludedImage }) => {
  const clickCard = () => {
    setIncludedImage(image);
  }

  return (
    <>
      <div
        onClick={clickCard}
        className="bg-white w-28 h-28 flex items-center justify-center"
      >
        {/* todo */}
        {image?.path && <img src={'/src/assets/img/math/' + image?.path} />}
      </div>
    </>
  );
};

export default Image;
