import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import SliderCard from "./SliderCard";


const ProductSlide = () => {
   
  return (
        <div className="slider-bg-img h-full border-transparent border mt-10 my-auto">
            <div className="mt-10 px-4">
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
                        200: {
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
                    <SwiperSlide className="bg-blue-300 text-white">Item No 1</SwiperSlide>
                    <SwiperSlide className="bg-blue-300 text-white">Item No 2</SwiperSlide>
                    <SwiperSlide className="bg-blue-300 text-white">Item No 3</SwiperSlide>
                    <SwiperSlide className="bg-blue-300 text-white">Item No 4</SwiperSlide>
                    <SwiperSlide className="bg-blue-300 text-white">Item No 5</SwiperSlide>
                    <SwiperSlide className="bg-blue-300 text-white">Item No 6</SwiperSlide>
                    <SwiperSlide className="bg-blue-300 text-white">Item No 7</SwiperSlide>
                    <SwiperSlide className="bg-blue-300 text-white">Item No 8</SwiperSlide>
                    <SwiperSlide className="bg-blue-300 text-white">Item No 9</SwiperSlide>
                </Swiper>
               
            </div>
        </div>
  );
};

export default ProductSlide;
