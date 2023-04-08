import Layout from "../components/Layout";
import Title from "../components/UI/Title";
import SwiperItem from "../components/SwiperItem";

export default function Main() {
  return (
    <Layout>
       <Title>Выберите направление</Title>
      <div className="p-[22px]">
          <swiper-container slides-per-view="1" navigation="true" pagination="true">
            <SwiperItem path="/public/img/Slider/math.png">Математика</SwiperItem>
            <SwiperItem path="/public/img/Slider/or.png">Правописание</SwiperItem>
            <SwiperItem path="/public/img/Slider/izo.png" to="/draw">Рисование</SwiperItem>
            <SwiperItem path="/public/img/Slider/images.png" to="/draw">Рисунки</SwiperItem>
          </swiper-container>
      </div>
    </Layout>
  );
}
