import React from "react";
import Footer from "./footer/Footer";
import Navbar from "./Navbar/Navbar";

function Layout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
