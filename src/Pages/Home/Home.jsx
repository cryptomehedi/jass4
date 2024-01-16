import Banner from "./Banner";
import Features from "./Features";
import ProductSlide from "./ProductSlide";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="container mx-auto"><ProductSlide /></div>
            <Features />
        </div>
    );
};

export default Home;