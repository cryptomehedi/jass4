import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import brand1 from './../../assets/jass4-brand.png'
import brand2 from './../../assets/brand-1.png'
import brand3 from './../../assets/brand-2.png'


const OurBrands = () => {
    return (

        <div>
            
            <div className="h-full border-transparent border mt-10 my-auto">
                    <div className="mt-10 text-center text-3xl font-thin text-orange-400 uppercase">
                        Our <span className="font-semibold">Brands</span>
                    </div>
                <div className="p-11 md:px-60">
                    
                    <Swiper
                        watchSlidesProgress={true}
                        slidesPerView={3}
                        className="mySwiper w-full"
                        spaceBetween={30}
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
                            centeredSlides:true
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
                        <SwiperSlide><img src={brand1} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={brand2} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={brand3} alt="" /></SwiperSlide>
                    </Swiper>
                
                </div>
            </div>
        </div>
        
    );
};

export default OurBrands;


