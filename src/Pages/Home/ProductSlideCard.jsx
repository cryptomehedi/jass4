import { Link } from "react-router-dom";

const ProductSlideCard = ({ info }) => {
  const { img, name } = info;
  return (
    <div className="card card-compact w-full  bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-56 shadow-2xl mt-4 rounded-lg"
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title  justify-center">{name}</h2>
        <div className="card-actions justify-center md:justify-end">
          <Link to="/products/product" className="btn btn-primary">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductSlideCard;
