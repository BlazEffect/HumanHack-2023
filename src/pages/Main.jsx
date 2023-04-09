import Layout from '../components/Layout';
import Title from '../components/UI/Title';
import SwiperItem from '../components/SwiperItem';

import math from '/src/assets/images/Slider/math.png';
import or from '/src/assets/images/Slider/or.png';
import izo from '/src/assets/images/Slider/izo.png';
import images from '/src/assets/images/Slider/images.jpg';
import { useEffect } from 'react';

export default function Main() {
  useEffect(() => {
    document.body.style.overflow = 'auto'
  }, [])
  return (
    <Layout>
      <Title>Выберите направление</Title>
      <div className="p-[22px]">
        <swiper-container slides-per-view="1" navigation="true" pagination="true">
          <SwiperItem path={math} to="/math">Математика</SwiperItem>
          <SwiperItem path={or} to="/alphabet">Правописание</SwiperItem>
          <SwiperItem path={izo} to="/draw">Рисование</SwiperItem>
          <SwiperItem path={images} to="/pictures">Рисунки</SwiperItem>
        </swiper-container>
      </div>
    </Layout>
  );
}
