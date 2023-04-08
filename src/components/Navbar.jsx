import lamp from "/src/assets/images/lamp.png";
import stars from "/src/assets/images/sparkle.png";
import aIcon from "/src/assets/images/Group 68.png";
import mushrooms from "/src/assets/images/mushroom-filled.png";
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const nav = useRef(null);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="w-full max-h-[50px] md:max-h-none">
      <section className="max-w-[250px] md:flex hidden w-full min-h-full bg-cover bg-[url('/src/assets/images/sidebar.png')]">
        <ul className="mt-16 mx-4">
          <li className="flex">
            <div className="bg-[#58AA2C] p-2 rounded-[10px]">
              <img
                src={lamp}
                className="w-[32px] h-[32px] object-contain"
                alt=""
              />
            </div>
            <div className="flex items-center ml-3">
              <span className="text-center font-bold text-[18px] text-[#694A04]">
                Математика
              </span>
            </div>
          </li>
          <li className="flex mt-8">
            <div className="bg-[#58AA2C] p-2 rounded-[10px]">
              <img
                src={stars}
                className="w-[32px] h-[32px] object-contain"
                alt=""
              />
            </div>
            <div className="flex items-center ml-3">
              <span className="text-center font-bold text-[18px] text-[#694A04]">
                Правописание
              </span>
            </div>
          </li>
          <li className="flex mt-8">
            <div className="bg-[#58AA2C] p-2 rounded-[10px]">
              <img
                src={mushrooms}
                className="w-[32px] h-[32px] object-contain"
                alt="Рисование"
              />
            </div>
            <div className="flex items-center ml-3">
              <span className="text-center font-bold text-[18px] text-[#694A04]">
                Рисование
              </span>
            </div>
          </li>
        </ul>
      </section>
      <section className="px-[15px] flex h-[50px] items-center md:hidden min-w-full bg-[#70B839] opacity-80">
        <img
          onClick={handleClick}
          src={open ? "/src/assets/images/close.png" : "/src/assets/images/burger.png"}
          className="cursor-pointer max-h-[32px] max-w-[32px]"
          alt="Открыть меню"
        />
      </section>
      <CSSTransition
        nodeRef={nav}
        in={open}
        timeout={1000}
        classNames={'my-node'}
        unmountOnExit
      >
        <nav ref={nav} className={
            "absolute z-10 top-10 bottom-48 bg-[#70B839] opacity-70 w-full nav-height my-node"
            }>
          <ul className="flex menu-opened transition-all items-center flex-col h-full justify-center">
            <li className="text-white font-bold uppercase text-[20px] menu-item">
                <Link to='/'>Главная</Link>
              </li>
            <li className="mt-[20px] text-white font-bold uppercase text-[20px] menu-item">
              Математика
            </li>
            <li className="mt-[20px] font-bold text-white uppercase text-[20px] menu-item">
              <>Правописание</>
            </li>
            <li className="mt-[20px] font-bold text-white uppercase text-[20px] menu-item">
              <Link to='/draw'>Рисование</Link>
            </li>
            <li className="mt-[20px] font-bold text-white uppercase text-[20px] menu-item">
              <Link to="/pictures">Рисунки</Link>
            </li>
          </ul>
        </nav>
      </CSSTransition>
    </div>
  );
}
