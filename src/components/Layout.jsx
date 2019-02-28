import React from "react";
import Header from "./header";
import Footer from "./Footer";

const Layout = ({ children, title, subTitle }) => (
  <div>
    <Header title={title} subTitle={subTitle} />
    <section className="section">{children}</section>
    <Footer />
  </div>
);

export default Layout;
