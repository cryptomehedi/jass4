import { useState } from 'react';
import levelData from '../../Data/privateLevel.json'
import img from '/services/JASS4-Lubricant-services-private-label.jpg'


const ServiceLevel = () => {
    // eslint-disable-next-line
    const [levels, setLevels] = useState(levelData)
    return (
        <section className=" body-font">
            <div className="container flex-col-reverse mx-auto flex px-5 py-24 md:flex-row items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="JASS4 Lubricant" src={img} />
                </div>
                <div className="lg:flex-grow flex-col md:w-1/2 lg:pl-24 md:pl-16 flex md:flex-col md:items-start md:text-left items-center text-center">
                    {
                        levels.map(level => {
                            return <div key={level.id}>
                                {level.heading && <h1 className="title-font text-4xl md:text-3xl mb-4 font-medium">{level.heading}</h1>}
                                {level.head && <h1 className="title-font text-2xl md:text-xl mb-1 font-medium">{level.head}</h1>}
                                <div className="mb-3 text-left text-xs leading-relaxed">{level.description}</div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default ServiceLevel;