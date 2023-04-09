import Button from './Button';
import { Link } from 'react-router-dom';

export default function SwiperItem({ children, path, to }) {
  return (
    <swiper-slide>
      <Link to={to}>
        <div className="p-[2rem] mt-[3rem] flex items-center justify-center">
          <img src={path} alt="" className="max-h-[235px]"/>
          <Button
            className="absolute font-[900] text-[26px] text-[#694A04] border-2 py-3 top-0 border-[#70B839] bg-white rounded-[50px] min-w-[230px]">
            {children}
          </Button>
        </div>
      </Link>
    </swiper-slide>
  );
}
