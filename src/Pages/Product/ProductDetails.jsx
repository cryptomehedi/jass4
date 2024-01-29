import productsData from "../../Data/Products.json";
import { useParams } from "react-router-dom";
import PageTitle from "../Shared/PageTitle";

const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.find((product) => product.id === +id);
  const { name, img, description, Weight, power } = product;
  return (
    <div>
      <PageTitle text={name}/>
      <section className="body-font overflow-hidden">
        <div className="container w-full px-5 py-24 mx-auto">
          <div className="lg:w-4/5 w-5/6 mx-auto flex flex-wrap">
            <img
              alt={`${name} | JASS4 Lubricant`}
              className="lg:w-1/2 w-full lg:h-auto md:h-40 object-cover object-center rounded-2xl"
              src={img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font tracking-widest">
                PRODUCT NAME
              </h2>
              <h1 className=" text-3xl md:mt-8 title-font font-medium mb-1">
                {name}
              </h1>
              <h2 className="text-base title-font uppercase mt-6 tracking-widest">
                Product Power
              </h2>
              <div className='text-lg' > {power}</div>
              <h2 className="text-base title-font uppercase mt-6 tracking-widest">
                Product Weight
              </h2>
              <div> 
                {typeof(Weight) === "number" ? <div className='text-lg' > {Weight}L</div> : <div className='text-lg' >{product.Weight}</div>}
              </div>
              <h2 className="text-base title-font uppercase mt-6 tracking-widest">
                Product Description
              </h2>
              {description ? <p className="text-xs leading-relaxed">{description}</p> : <p className="text-sm leading-relaxed">
                  Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                  sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                  juiceramps cornhole raw denim forage brooklyn. Everyday carry
                  +1 seitan poutine tumeric. Gastropub blue bottle austin
                  listicle pour-over, neutra jean shorts keytar banjo tattooed
                  umami cardigan.
                </p>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
