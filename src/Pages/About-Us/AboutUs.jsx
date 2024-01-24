import OurBrands from "../Home/OurBrands";
import ABoutFeature from "./ABoutFeature";
import AboutBanner from "./AboutBanner";
import AboutMerits from "./AboutMerits";

const AboutUs = () => {
    return (
        <div>
            <div className="container mx-auto"><AboutBanner/></div>
            <ABoutFeature/>
            <AboutMerits/>
            <OurBrands/>
        </div>
    );
};

export default AboutUs;