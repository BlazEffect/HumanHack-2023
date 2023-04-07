import React from 'react';

const ImageCard = ({imagePath}) => {
  return (
    <div className="flex justify-center">
      <img src={imagePath} alt=""/>
    </div>
  );
};

export default ImageCard;