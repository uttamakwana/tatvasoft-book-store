import React from "react";
import { Books, Header } from "../../components/index.js";
import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Books />
      <div class="gradient"></div>
    </>
  );
};

export default Home;
