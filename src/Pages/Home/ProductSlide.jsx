import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import SliderCard from "./SliderCard";

import mobil from '../../assets/Products/mobil.jpg'

const ProductSlide = () => {

    const products = [
        { 
            id : 1,
            name : "Product 1",

        },
        { 
            id : 2,
            name : "Product 2",
        },
        { 
            id : 3,
            name : "Product 3",
        },
        { 
            id : 4,
            name : "Product 4",
        },
        { 
            id : 5,
            name : "Product 5",
        },
        { 
            id : 6,
            name : "Product 6",
        },
        { 
            id : 7,
            name : "Product 7",
        },
        { 
            id : 8,
            name : "Product 8",
        },
        { 
            id : 9,
            name : "Product 9",
        },
        { 
            id : 10,
            name : "Product 10",
        },
        { 
            id : 11,
            name : "Product 11",
        },
        { 
            id : 12,
            name : "Product 12",
        },
    ]
   
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
                    {
                        products.map((product)=>{
                            return <SwiperSlide key={product.id} className=" rounded-xl ">
                                <div className="card card-compact w-full  bg-base-100 shadow-xl">
                                    <figure><img className="w-56 shadow-2xl mt-4 rounded-lg" src={mobil} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title  justify-center">{product.name}</h2>
                                        <div className="card-actions justify-center md:justify-end">
                                            <button className="btn btn-primary">See Details</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
               
            </div>
        </div>
  );
};

export default ProductSlide;
