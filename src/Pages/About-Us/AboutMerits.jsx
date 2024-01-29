import img from '../../assets/About-Img/JASS4-Lubricant-bg04-1.jpg'


const AboutMerits = () => {

    const merits = [
        {
            id : 1,
            name : 'Excellence through teamwork'
        },
        {
            id : 2,
            name : 'Dynamic usage of resources'
        },
        {
            id : 3,
            name : 'Win-win position between our customers and ourself'
        },
        {
            id : 4,
            name : 'Investment plan for future'
        },
        {
            id : 5,
            name : 'Training plan for future'
        },
        {
            id : 6,
            name : 'Training our people to be the best'
        },
        {
            id : 7,
            name : 'Committing ourself for forward thinking and implementation'
        },
    ]




  return (
    <div className='container mx-auto' >
      <section className="body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl font-thin text-3xl mb-4">
                OUR <span className="font-bold">MERITS</span>
            </h1>
            <div className='text-start'>
                {
                    merits.map(merit =>{
                        return <p key={merit.id} className="flex items-start md:items-center text-sm font-thin leading-relaxed">
                                    <svg fill="#ffa200" className='w-3' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264.564 264.564" xmlSpace="preserve" stroke="#ffc800"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M132.281,264.564c51.24,0,92.931-41.681,92.931-92.918c0-50.18-87.094-164.069-90.803-168.891L132.281,0l-2.128,2.773 c-3.704,4.813-90.802,118.71-90.802,168.882C39.352,222.883,81.042,264.564,132.281,264.564z"></path> </g> </g> </g></svg>
                                    <p className='ml-2' >{merit.name}</p>
                                </p>
                    })
                }
            </div>
            
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-lg"
              alt="hero"
              src={img}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMerits;
