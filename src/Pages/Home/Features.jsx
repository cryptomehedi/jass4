
import FeaturesCard from "./FeaturesCard";
import { Link } from "react-router-dom";
import featuresData from '../../Data/Features.json'
import { useState } from "react";

const Features = () => {
  // eslint-disable-next-line
  const [features, setFeatures] = useState(featuresData)

  return (
    <div className="container mx-auto">
      <div className="flex flex-col-reverse md:flex-row  mt-10 items-center md:mt-20 overflow-hidden">
        <div className="mt-6 md:mt-14 px-4 flex-1">
          <p className="text-center md:text-left">
            Worldwide Tractors Sdn Bhd provides wide range of lubricants for
            automotive, industrial, mining, construction, agrochemicals,
            agricultural, Marine and Port Operation.
          </p>
          <div className='text-center md:text-start'><Link to='about'><button className='bg-[#1F2A7D] text-white font-semibold mt-3 p-2 px-3 md:px-5 rounded-full hover:font-bold md:mt-4 hover:bg-orange-500 duration-500 text-center'>Learn More</button></Link></div>
        </div>
        <div className="text-center  flex-1">
          <p className="text-5xl ">INDUSTRIES</p>
          <p className="text-3xl font-thin">WE SERVE</p>
        </div>
      </div>

      <div className="py-12 m-2 shadow-lg rounded-xl">
        <div className="max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="flex justify-center ">
            <div className="space-y-10 w-full md:w-5/6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <FeaturesCard info={feature} key={feature.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
