// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

import brand1 from "./../../assets/JASS-MAX1.png";
// import brand2 from './../../assets/brand-1.png'
// import brand3 from './../../assets/brand-2.png'

const OurBrands = () => {
  // const brands = [
  //     {
  //         id : 1,
  //         img : brand1
  //     },
  // ]
  return (
    <div className="mx-4">
      <div className=" block md:hidden">
        <div className="h-full border-transparent border mt-10 my-auto">
          <div className="mt-10 text-center text-3xl font-thin text-orange-400 uppercase">
            Our <span className="font-semibold">Brands</span>
          </div>
          <div className="p-11 md:px-60">
            <img src={brand1} alt="JASS MAX1 Lubricant" />
            {/* <Swiper
                        watchSlidesProgress={true}
                        slidesPerView={1}
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
                            slidesPerView: 1,
                            spaceBetween: 40,
                            centeredSlides:true
                            },
                            1024: {
                            slidesPerView: 1,
                            spaceBetween: 50,
                            centeredSlides:false
                            },
                        }}
                        modules={[ Autoplay, Pagination, Navigation]}
                    >
                        {
                            brands.map(brand =>{
                                return <SwiperSlide key={brand.id}></SwiperSlide>
                            })
                        }
                        
                    </Swiper> */}
          </div>
        </div>
      </div>
      <p className="font-semibold text-xl mt-5">
        <span className="text-orange-400">JASS MAX1 Lubricant</span> has been in the{" "}
        <span className="text-orange-400">Bangladesh Market</span> for a long
        time with <span className="text-orange-400">Great Trust </span>
        and <span className="text-orange-400">Reputation</span>. <br /> We
        believe in <span className="text-orange-400">Quality</span>.
      </p>
    </div>
  );
};

export default OurBrands;
