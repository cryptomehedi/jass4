import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./ProductSlide.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ProductSlide = () => {
  return (
    <div className="mt-10">
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={3}
        className="mySwiper w-full"
        navigation={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
            clickable: true,
          }}
          breakpoints={{
            375: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        modules={[ Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>Item No 1</SwiperSlide>
        <SwiperSlide>Item No 2</SwiperSlide>
        <SwiperSlide>Item No 3</SwiperSlide>
        <SwiperSlide>Item No 4</SwiperSlide>
        <SwiperSlide>Item No 5</SwiperSlide>
        <SwiperSlide>Item No 6</SwiperSlide>
        <SwiperSlide>Item No 7</SwiperSlide>
        <SwiperSlide>Item No 8</SwiperSlide>
        <SwiperSlide>Item No 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSlide;
