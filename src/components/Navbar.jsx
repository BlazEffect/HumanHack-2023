import lamp from "/public/img/lamp.png";
import stars from "/public/img/sparkle.png";
import aIcon from "/public/img/Group 68.png";
import mushrooms from "/public/img/mushroom-filled.png";
import { useState } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="">
      <section className="max-w-[250px] xs:flex hidden w-full min-h-full bg-cover bg-[url('/public/img/sidebar.png')]">
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
      <section className="px-[15px] py-2 xs:hidden min-w-[100vw] bg-[#70B839] opacity-80">
        <img
          onClick={handleClick}
          src="/img/burger.png"
          className="cursor-pointer"
          alt="Открыть меню"
        />
        <nav className={open ? "absolute top-9 bg-" : "hidden"}>
          <ul className="flex items-center justify-center">
            <li>123</li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
