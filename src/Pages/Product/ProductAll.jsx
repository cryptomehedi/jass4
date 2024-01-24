import { Link } from 'react-router-dom';
import mobil from '../../assets/Products/mobil.jpg'

const ProductAll = () => {
    
    const products = [
        {
            id: 1,
            img : mobil,
            name : "Semi Synthetic Engine Oil",
            price : 500,
        },
        {
            id: 2,
            img : mobil,
            name : "Compressor Oils (P) Series",
            price : 500,
        },
        {
            id: 3,
            img : mobil,
            name : "Compressor Oils (r) Series",
            price : 500,
        },
        {
            id: 4,
            img : mobil,
            name : "Industrial Gear Oil",
            price : 500,
        },
        {
            id: 5,
            img : mobil,
            name : "Semi Synthetic Engine Oil",
            price : 500,
        },
        {
            id: 6,
            img : mobil,
            name : "Slideway Oil Series",
            price : 500,
        },
        {
            id: 7,
            img : mobil,
            name : "Turbine Oil",
            price : 500,
        },
        
    ]

    return (
        <div>
            <section className="body-font">
                <div className="container px-5 mx-auto text-center">
                    <div className="flex flex-wrap w-full mt-2 flex-col items-center text-center">
                        <h1 className="sm:text-3xl text-2xl my-14 font-medium title-font">OUR PRODUCTS</h1>
                    </div>
                    <div className='space-y-10 grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10'>
                        {
                            products.map(product =>{
                               return   <Link preventScrollReset={true} to='/products/product' key={product.id} className="card card-compact w-5/6 md:w-96 bg-base-100 p-5 m-5 shadow-xl">
                                            <figure><img className='w-52 rounded-xl ' src={product.img} alt="Shoes" /></figure>
                                            <div className="card-body ">
                                                <div className='flex justify-center' ><h2 className="card-title">{product.name}</h2></div>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, sit.</p>
                                                <div className="card-actions justify-end">
                                                    <div>Price : {product.price}<span className='text-lg'>৳</span></div>
                                                </div>
                                            </div>
                                        </Link>
                            })
                        }
                    </div>


                </div>
            </section>
        </div>
    );
};

export default ProductAll;