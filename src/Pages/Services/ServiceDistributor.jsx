import { useState } from 'react';
import distributerData from '../../Data/distributor.json'
import img from "/services/services-distributor.jpg"


const ServiceDistributor = () => {
    // eslint-disable-next-line
    const [distributors , setDistributors] = useState(distributerData)

    const productLiability = [
        {
            id : 1,
            name : "The product was sold with the defect"
        },
        {
            id : 2,
            name : "The seller intended to provide the buyer with the product without making changes"
        },
        {
            id : 3,
            name : "The plaintiff suffered injuries due to the defective product"
        },
    ]

    return (
        <section className=" body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center md:min-h-screen rounded" alt="hero" src={img} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    {
                        distributors.map(distributor => {
                            return <div key={distributor.id}>
                                {distributor.headings && <h1 className="title-font text-4xl md:text-3xl mb-4 font-medium">{distributor.headings}</h1>}
                                {distributor.head && <h1 className="title-font text-2xl md:text-xl mb-1 font-medium">{distributor.head}</h1>}
                                <div className="mb-3 text-left text-xs leading-relaxed">{distributor.description}</div>
                            </div>
                        })
                    }
                    <p className="mb-3 text-left text-xs leading-relaxed">This liability law prevents the plaintiff from the need to prove the chain of supply. In order for any entity in the line of distribution to prove it has no fault, it would need to show which entity is actually responsible for the defect.</p>
                    <p className="mb-3 text-left text-xs leading-relaxed">In order to prove product liability, the plaintiff must prove:</p>
                    <div className="text-start" >
                        {
                            productLiability.map(item => {
                                return <div key={item.id} className="flex items-start md:items-center text-sm font-thin leading-relaxed">
                                        <svg fill="#ffa200" className='w-3' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264.564 264.564" xmlSpace="preserve" stroke="#ffc800"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M132.281,264.564c51.24,0,92.931-41.681,92.931-92.918c0-50.18-87.094-164.069-90.803-168.891L132.281,0l-2.128,2.773 c-3.704,4.813-90.802,118.71-90.802,168.882C39.352,222.883,81.042,264.564,132.281,264.564z"></path> </g> </g> </g></svg>
                                        <div className='ml-2' >{item.name}</div>
                                    </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDistributor;