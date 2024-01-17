import img1 from '../../assets/slider01-img.jpg'

const Banner = () => {
    return (
        <div className="">
            <div className='banner-m-img border border-transparent bg-no-repeat bg-cover bg-center'>
                <header className="px-4 md:px-16 relative grid grid-cols-1 md:grid-cols-2 mt-5 items-center md:mt-9 h-screen overflow-hidden">
                    <div className="hidden md:block"><img className='rounded-2xl' loading='lazy' src={img1} alt=""/></div>
                    <div className="relative z-30 md:text-left p-2">
                        <div className="mb-2 text-white">
                            <p className="text-4xl md:text-5xl">Unmatched Experience </p> 
                            <p className='py-3 text-2xl md:text-3xl font-medium'>And</p>
                            <p className='text-4xl md:text-5xl'>Expertise in Lubricants Industry </p>
                        </div>
                        <button  className='bg-[#1F2A7D] text-white font-semibold p-2 px-3 md:px-5 rounded-full hover:font-bold md:mt-4 hover:bg-orange-500 duration-500 text-center'>Learn More</button>
                    </div>
                    
                </header>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 items-center md:mt-20 overflow-hidden">
                <div className="text-center">
                    <p className="text-3xl font-thin">THE SOLUTION TO ALL</p>
                    <p className="text-5xl">MACHINERY NEEDS</p>
                </div>
                <div className=' mt-6 md:mt-14 px-4 md:px-16'>
                    <p>JASS4 Lubricant is a world recognized company in lubricant and chemical products. The company started in the year 2023. It is present in 16 countries and 5 commercial offices based in Singapore, Cambodia, China, India and Bangladesh. JASS4 Lubricant’s success is based on its state of art research and investment based growth. It exploits new promising market segment with its unique products and innovation</p>
                    <button className='bg-[#1F2A7D] text-white font-semibold mt-3 p-2 px-3 md:px-5 rounded-full hover:font-bold md:mt-4 hover:bg-orange-500 duration-500 text-center'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;