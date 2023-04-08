import React from 'react';

const ImageCard = ({ imagePath }) => {
  return (
    <div className="flex justify-center mb-[30px]">
      <img src={imagePath} alt="" className="w-72 h-72"/>
    </div>
  );
};

export default ImageCard;