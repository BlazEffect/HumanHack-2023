import { useDrag } from "react-dnd";
import { useRef } from 'react'

export default function LetterCell({ letter }) {
    const [{ isDragging }, dragRef] = useDrag({
        type: "letter-back",
        item: { letter },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      });

    return (
        <div draggable ref={dragRef} className="bg-[#ccc] w-10 h-10 flex items-center justify-center">
            {letter}
        </div>
    )
}