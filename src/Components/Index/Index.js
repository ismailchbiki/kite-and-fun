import { Fragment } from "react";

import Header from "./../Header/Index";
import Services from "./../Services/Index";
import Watersports from "./../Watersports/Index";
import Team from "./../Team/Index";
// import Newsletter from "./../Newsletter/Index";
import Footer from "./../Footer/Index";

const Index = () => {
  return (
    <Fragment>
      <Header />
      <Services />
      <Watersports />
      <Team />
      {/* <Newsletter /> */}
      <Footer />
    </Fragment>
  );
};

export default Index;
