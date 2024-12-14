import OurBrands from "../Home/OurBrands";
import ABoutFeature from "./ABoutFeature";
import AboutBanner from "./AboutBanner";
import AboutMerits from "./AboutMerits";
import Cover from "../Shared/Cover";
import PageTitle from "../Shared/PageTitle";
import AboutCEO from "./AboutCEO";

const AboutUs = () => {
  return (
    <div>
        <PageTitle text={"About US"}/>
      <Cover title={"About Us"}/>
      <div className="container mx-auto">
        <AboutBanner />
      </div>
      <ABoutFeature />
      <AboutMerits />
      <AboutCEO/>
      <OurBrands />
    </div>
  );
};

export default AboutUs;
