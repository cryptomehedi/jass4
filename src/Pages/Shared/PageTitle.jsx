import { Helmet } from "react-helmet-async";

const PageTitle = ({ text }) => {
  return (
    <Helmet>
      <title>{text ? text : 'JASS MAX1 Lubricant'} | JASS MAX1 Lubricant</title>
    </Helmet>
  );
};

export default PageTitle;
