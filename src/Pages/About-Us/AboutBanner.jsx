import aboutImg from "../../assets/About-Img/about-img01.jpg"

const AboutBanner = () => {

    const productLists = [
        {
            id: 1,
            name: 'JASS4 Super Sinergia (Ester based Lubricant)'
        },
        {
            id: 2,
            name: 'JASS4 Sinergia FSL (Fully Synthetic Lubricant)'
        },
        {
            id: 3,
            name: 'JASS4 Sinergia (Synthesis Blend Lubricant)'
        },
        {
            id: 4,
            name: 'JASS4 Avancer SSL (Semi Synthetic Lubricant)'
        },
        {
            id: 5,
            name: 'JASS4 Transhift ( Automatic Transmission Fluids)'
        },
        {
            id: 6,
            name: 'JASS4 Motohypoid ( Axle gear oil)'
        },
        {
            id: 7,
            name: 'JASS4 Superace (Ester based Motorbike Lubricant)'
        },
        {
            id: 8,
            name: 'JASS4 Superider (Fully Synthetic Lubricant)'
        },
        {
            id: 9,
            name: 'JASS4 Superbike (Semi synthetic Lubricant)'
        },
        {
            id: 10,
            name: 'JASS4 Supermoto (Premium grade Lubricant)'
        },
    ]


    return (
        <div className="">
            <section className="body-font">
                <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow text-start md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">ABOUT JASS4 LUBRICANT </h1>
                        <p className=" text-xl md:text-base mt-10 md:mt-5 leading-relaxed">JASS4 Lubricant is a world recognised company in lubricant and chemical products. The company started in the year 2012. It is present in 16 countries and 5 commercial offices based in Singapore, Cambodia, China, India and Bangladesh. JASS4 Lubricant’s success is based on its state of art research and investment based growth. It exploits new promising market segment with its unique products and innovation. JASS4 Lubricant laboratories have come up with novel innovations such as:-</p>
                        <div className="my-4">
                            {
                                productLists.map(productList => {
                                    return <p className="font-thin" key={productList.id}>{productList.name}</p>
                                })
                            }
                        </div>
                        <p className=" text-xl md:text-base leading-relaxed">JASS4 Lubricant’s mission is to help automotive industries, commercial vehicles industries, motorbike industries, Transmission industries, Marine industries and industrial around the globe to realize the importance of suitable lubricants to be used for their equipment’s. This gives the company its value and meaning as a leader in the lubricant industry.</p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img alt="hero" src={aboutImg} className="object-cover rounded-2xl object-center"/>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default AboutBanner;