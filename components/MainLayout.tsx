import React from "react";
import Navbar from "./sections/Navbar";
import Carousel from "./sections/Carousel";
import Products from "./sections/Products";

const MainLayout = () => {
  return (
    <section>
      <Navbar />
      <Carousel />
      <Products />
    </section>
  );
};

export default MainLayout;
