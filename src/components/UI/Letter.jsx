import React from 'react';
import { useDrag, useDrop } from "react-dnd";

const Letter = ({ letter }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'letter',
    item: { letter },
    collect: (monitor) => ({
        isDragging: monitor.isDragging()
    })
})
  return (
    <div draggable ref={dragRef} className="bg-white w-10 min-h-[40px] flex items-center justify-center">
      {letter}
    </div>
  );
};

export default Letter;