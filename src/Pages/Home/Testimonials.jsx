import { useState } from "react";
import testimonialsData from "../../Data/Testimonials.json";
import quote from "../../assets/quote.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import TestimonialSlideCard from "./testimonialSlideCard";

const Testimonials = () => {
  // eslint-disable-next-line
  const [testimonials, setTestimonials] = useState(testimonialsData);

  return (
    <div className="mt-14 px-3 md:px-16">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl text-primary">Testimonial</h2>
          <h2 className="mt-2 text-3xl">What Our Customers Says</h2>
        </div>
        <img className="w-20 md:w-48" src={quote} alt="" />
      </div>
      <div>
        <div className="mt-12 h-full">
          <Swiper
            watchSlidesProgress={true}
            slidesPerView={3}
            className="mySwiper w-full"
          //   navigation={true}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
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
                centeredSlides:true
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
                centeredSlides:false
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {testimonials.map((testimonial) => {
              return (
                <SwiperSlide key={testimonial.id} className="rounded-xl ">
                  <TestimonialSlideCard key={testimonial.id} info={testimonial} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
