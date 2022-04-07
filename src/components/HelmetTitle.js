import { Helmet } from "react-helmet-async";

const HelmetTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | Search-Book</title>
    </Helmet>
  );
};

export default HelmetTitle;
