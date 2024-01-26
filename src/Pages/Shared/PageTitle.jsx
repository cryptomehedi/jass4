import { Helmet } from "react-helmet-async";

const PageTitle = ({ text }) => {
  return (
    <Helmet>
      <title>{text ? text : 'JSAA4 Lubricant'} | JASS4 Lubricant</title>
    </Helmet>
  );
};

export default PageTitle;
