import React from 'react';

const LevelCounter = ({level, maxLevel}) => {
  return (
    <div className="text-center">
      <span>Уровень {level}/{maxLevel}</span>
    </div>
  );
};

export default LevelCounter;