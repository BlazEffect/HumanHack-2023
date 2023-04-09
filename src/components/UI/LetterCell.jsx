import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

export default function LetterCell({ letter }) {
  const letterRef = useRef(null)
  return (
    <CSSTransition
      nodeRef={letterRef}
      in={Boolean(letter)}
      timeout={1000}
      classNames={"show-block"}
    >
      <div ref={letterRef} className="bg-[#ccc] text-[24px] w-10 h-10 flex items-center justify-center">
        {letter}
      </div>
    </CSSTransition>
  );
}