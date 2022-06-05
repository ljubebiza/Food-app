import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function Layout(props) {
  return (
    <>
      <Header title={props.title} />
      {props.children}
      <Footer />
    </>
  );
}
