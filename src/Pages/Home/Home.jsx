import PageTitle from "../Shared/PageTitle";
import Banner from "./Banner";
import Features from "./Features";
import OurBrands from "./OurBrands";
import ProductSlide from "./ProductSlide";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <PageTitle text={"Home"}/>
      <Banner />
      <div className="container mx-auto">
        <ProductSlide />
      </div>
      <Features />
      <Testimonials/>
      <OurBrands />
    </div>
  );
};

export default Home;
