import Button from './Button';
import { Link } from 'react-router-dom';

export default function SwiperItem({ children, path, to }) {
  return (
    <swiper-slide>
      <Link to={to}>
        <div className="p-[4rem] flex items-center justify-center">
          <img src={path} alt="" className="h-[235px]"/>
          <Button
            className="absolute font-[900] text-[#694A04] border-2 py-3 top-0 border-[#70B839] bg-white rounded-[50px] w-[190px]">
            {children}
          </Button>
        </div>
      </Link>
    </swiper-slide>
  );
}
