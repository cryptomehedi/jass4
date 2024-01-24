import mobil from '../../assets/Products/mobil.jpg'


const ProductDetails = () => {
    return (
        <div>
            <section className="body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-40 object-cover object-center rounded-2xl" src={mobil}/>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font tracking-widest">PRODUCT NAME</h2>
                        <h1 className=" text-3xl md:mt-8 title-font font-medium mb-1">Semi Synthetic Engine Oil</h1>
                        <h2 className="text-base title-font uppercase mt-6 tracking-widest">Product Description</h2>
                        <p className="text-sm leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                        <h2 className="text-base title-font uppercase mt-6 tracking-widest">Product Description</h2>
                        <div>Price : 500<span className='text-lg'>৳</span></div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetails;