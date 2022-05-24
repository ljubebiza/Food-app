import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <>
      <Header title={props.title} />
      {props.children}
      <Footer />
    </>
  );
}
