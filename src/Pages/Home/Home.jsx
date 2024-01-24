import Banner from "./Banner";
import Features from "./Features";
import OurBrands from "./OurBrands";
import ProductSlide from "./ProductSlide";

const Home = () => {

    return (
        <div>
            <Banner />
            <div className="container mx-auto"><ProductSlide /></div>
            <Features />
            <OurBrands/>
        </div>
    );
};

export default Home;