import React from "react";
import { Books, Footer, Header } from "../../components/index.js";
import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Books />
      <Footer />
      <div class="gradient"></div>
    </>
  );
};

export default Home;
