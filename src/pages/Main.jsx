import Layout from '../components/Layout';
import Title from '../components/UI/Title';
import SwiperItem from '../components/SwiperItem';

export default function Main() {
  return (
    <Layout>
      <Title>Выберите направление</Title>
      <div className="p-[22px]">
        <swiper-container slides-per-view="1" navigation="true" pagination="true">
          <SwiperItem path="/src/assets/images/Slider/math.png" to="/">Математика</SwiperItem>
          <SwiperItem path="/src/assets/images/Slider/or.png" to="/alphabet">Правописание</SwiperItem>
          <SwiperItem path="/src/assets/images/Slider/izo.png" to="/draw">Рисование</SwiperItem>
          <SwiperItem path="/src/assets/images/Slider/images.png" to="/draw">Рисунки</SwiperItem>
        </swiper-container>
      </div>
    </Layout>
  );
}
