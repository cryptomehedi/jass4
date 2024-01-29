
import { useState } from 'react';
import { Link } from 'react-router-dom';
import productData from '../../Data/Products.json'
const ProductAll = () => {
    // eslint-disable-next-line
    const [products, setProducts] = useState(productData)
    
    return (
        <div>
            <section className="body-font">
                <div className="container px-5 mx-auto text-center">
                    <div className='space-y-10 grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10'>
                        {
                            products.map(product =>{
                               return   <Link to={`/products/product/${product.id}`} key={product.id} className="card card-compact w-5/6 md:w-96 bg-base-100 p-5 m-5 shadow-xl">
                                            <figure><img className='w-52 rounded-xl ' src={product.img} alt={`${product.name} || JASS4 Lubricant`} /></figure>
                                            <div className="card-body ">
                                                <div className='flex justify-center' ><h2 className="card-title">{product.name}</h2></div>
                                                <p className='text-2xl' >{product.power}</p>
                                                <div className="card-actions justify-end">
                                                    {
                                                        typeof(product.Weight) === "number" ? <div className='text-lg' >Weight : {product.Weight}L</div> : <div className='text-lg' >Weight : {product.Weight}</div>
                                                    }
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