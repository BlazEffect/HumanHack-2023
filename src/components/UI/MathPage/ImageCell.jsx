import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
export default function ImageCell({ image }) {
  const imageRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={imageRef}
      in={Boolean(image?.path)}
      timeout={1000}
      classNames={"show-block"}
    >
      <div
        ref={imageRef}
        className="bg-[#ccc] w-28 h-28 flex items-center justify-center"
      >
        <img src={"/src/assets/img/math/" + image?.path} alt="" />
      </div>
    </CSSTransition>
  );
}
