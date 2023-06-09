import Title from './UI/Title';
import { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import cross_cool from '../assets/images/cross_cool.png';

export default function Modal({ children, title, open, handleClose, withOutTimer = false, changeOverflow = false }) {
  const modalRef = useRef(null);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      !withOutTimer ? setTimeout(handleClose, 3000) : '';
    } else {
      document.body.style.overflow = 'auto';
    }

  }, [open]);

  useEffect(() => {
    if(changeOverflow) {
      document.body.style.overflow = 'auto'
    }
  }, [changeOverflow])

  const classNames = `${open ? '' : 'hidden'} modal-wrapper flex justify-center items-center blured w-full h-full fixed top-0 left-0 right-0 bottom-0`;

  return (
    <CSSTransition
      nodeRef={modalRef}
      in={open}
      timeout={2000}
      classNames={'show-modal'}
    >
      <div ref={modalRef} className={classNames}>
        <div tabIndex="-1" onBlur={handleClose} className="modal p-4 w-[250px] relative rounded-[15px] bg-white border-[#70B839] border-2 h-[300px]">
          <div className="text-center">
            <Title className="!text-[#70B839]">{title}</Title>
            <div className="absolute cursor-pointer right-4 top-2 text-[24px]" onClick={handleClose}>
              <img className="w-4 h-4" src={cross_cool} alt=""/>
            </div>
          </div>
          <div className='text-center flex flex-col justify-center items-center text-[22px] font-[300]'>
            {children}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}