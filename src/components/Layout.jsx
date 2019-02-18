import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <section className="section">{children}</section>
      <Footer />
    </div>
  );
};

export default Layout;
