import ProductAll from "./ProductAll";
import Cover from "../Shared/Cover";
import PageTitle from "../Shared/PageTitle";

const ProductHome = () => {
  return (
    <div>
      <PageTitle text={"Our Product"}/>
      <Cover title={"Our Products"}/>
      <ProductAll />
    </div>
  );
};

export default ProductHome;
