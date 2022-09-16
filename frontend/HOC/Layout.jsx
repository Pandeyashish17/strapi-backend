import React from "react";
import NavBar from "../components/Navbar";
import CategoryBar from "../components/CategoryBar";

const Layout = ({ children, categories }) => {
  return (
    <>
      <NavBar />
      <CategoryBar categories={categories} />
      {children}
    </>
  );
};

export default Layout;
