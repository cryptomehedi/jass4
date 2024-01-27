import { useState } from 'react';
import trollData from '../../Data/toll.json'
import img from "/services/services-toll-blending.jpg"


const ServiceToll = () => {
    // eslint-disable-next-line
    const [trolls , setTrolls] = useState(trollData)
    return (
        <section className=" body-font">
            <div className="container  mx-auto flex px-5  md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                   <div>
                        {
                            trolls.map(troll => {
                                return <div key={troll.id}>
                                {troll.headings && <h1 className="title-font text-4xl md:text-3xl mb-4 font-medium">{troll.headings}</h1>}
                                {troll.head && <h1 className="title-font text-2xl md:text-xl mb-1 font-medium">{troll.head}</h1>}
                                <div className="mb-3 text-left text-xs leading-relaxed">{troll.description}</div> 
                                <div className="mb-3 text-left text-xs leading-relaxed">{troll.description2}</div>
                                {
                                   troll.description3 && <div className="mb-3 text-left text-xs leading-relaxed">{troll.description3}</div>
                                }
                                {
                                   troll.description4 && <div className="mb-3 text-left text-xs leading-relaxed">{troll.description4}</div>
                                }
                            </div>
                            })
                        }
                   </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src={img} />
                </div>
            </div>
        </section>
    );
};

export default ServiceToll;