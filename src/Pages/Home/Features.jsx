import portImg from './../../assets/icon-port-operations.png'
import marineImg from './../../assets/icon-marine.png'
import millImg from './../../assets/icon-steel-mill.png'
import commercialImg from './../../assets/icon-commercial-vehicles.png'
import transformersImg from './../../assets/icon-transformers.png'
import oilImg from './../../assets/icon-oil-rigs.png'
import portBGg from './../../assets/industry-port-operation-bg.jpg'
import marineBg from './../../assets/industry-marine-bg.jpg'
import millBg from './../../assets/industry-steel-mill-bg.jpg'
import commercialBg from './../../assets/industry-commercial-vehicles-bg.jpg'
import transformersBg from './../../assets/industry-transformers-bg.jpg'
import oilBg from './../../assets/industry-oil-rigs-bg.jpg'
import FeaturesCard from './FeaturesCard'


const Features = () => {

    const features = [
        {
            name: 'PORT OPERATIONS',
            img: portImg,
            bg: portBGg,
        },
        {
            name: 'MARINE',
            img: marineImg,
            bg: marineBg,
        },
        {
            name: 'STEEL MILL',
            img: millImg,
            bg: millBg
        },
        {
            name: 'COMMERCIAL VEHICLES',
            img: commercialImg,
            bg: commercialBg
        },
        {
            name: 'TRANSFORMERS',
            img: transformersImg,
            bg: transformersBg
        },
        {
            name: 'OIL RIGS',
            img: oilImg,
            bg: oilBg
        },
    ]



    return (
        <div>
            <div className="py-12 m-2 shadow-lg rounded-xl">
                <div className="max-w-7xl px-4 md:px-6 lg:px-8">
                    <div  className='flex justify-center'>
                        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                            {features.map((feature) => (
                                <FeaturesCard info={feature} key={feature.name}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;