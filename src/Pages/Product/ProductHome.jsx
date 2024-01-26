import ProductAll from "./ProductAll";
import Cover from "../Shared/Cover";
import img from '../../assets/About-Img/banner01.png'
import PageTitle from "../Shared/PageTitle";

const ProductHome = () => {
  return (
    <div>
      <PageTitle text={"Our Product"}/>
      <Cover title={"Our Products"} img={img}/>
      <ProductAll />
    </div>
  );
};

export default ProductHome;
