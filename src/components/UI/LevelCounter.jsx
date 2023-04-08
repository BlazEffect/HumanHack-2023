import React from 'react';

const LevelCounter = ({ level, maxLevel }) => {
  return (
    <div className="text-center mt-[30px] mb-[56px]">
      <span
        className="bg-[#FEE7CD] border-2 border-[#70B839] py-4 px-20 rounded-[14px]">Уровень {level}/{maxLevel}</span>
    </div>
  );
};

export default LevelCounter;