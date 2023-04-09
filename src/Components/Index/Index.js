import { Fragment } from "react";

import Header from "./../Header/Index";
import Services from "./../Services/Index";
import Destinations from "./../Destinations/Index";
// import Newsletter from "./../Newsletter/Index";
import Footer from "./../Footer/Index";

const Index = () => {
  return (
    <Fragment>
      <Header />
      <Services />
      <Destinations />
      {/* <Newsletter /> */}
      <Footer />
    </Fragment>
  );
};

export default Index;
