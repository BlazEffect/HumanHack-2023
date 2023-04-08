import React from 'react';

const ImageCard = ({ imagePath, small = false }) => {
  const customClassName = `${small ? 'max-w-[300px] max-h-[300px] w-full' : 'w-72 h-72'}`
  return (
    <div className={"flex justify-center mb-[30px]"}>
      <img src={imagePath} alt="" className={customClassName}/>
    </div>
  );
};

export default ImageCard;