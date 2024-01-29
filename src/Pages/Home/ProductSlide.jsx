import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import productsData from "../../Data/Products.json";
import { useState } from "react";
import ProductSlideCard from "./ProductSlideCard";
import { Link } from "react-router-dom";

const ProductSlide = () => {
  // eslint-disable-next-line
  const [products, setProducts] = useState(productsData);

  return (
    <div className="slider-bg-img rounded-lg h-full border-transparent border mt-10 my-auto">
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
            pauseOnMouseEnter: true,
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
          modules={[Autoplay, Pagination, Navigation]}
        >
          {products.map((product) => {
            return (
              <SwiperSlide
                key={product.id}
              ><ProductSlideCard info={product}/></SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="text-right animate-bounce mt-5" ><Link to='/products'><button  className='bg-[#1F2A7D] text-white font-semibold p-2 px-3 md:px-5 rounded-full hover:font-bold md:mt-4 hover:bg-orange-500 duration-500 text-center'>See All Products</button></Link></div>
    </div>
  );
};

export default ProductSlide;
