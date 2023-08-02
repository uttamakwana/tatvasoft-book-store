import React, { useContext } from "react";
import { Header } from "../../components/index.js";
import { Context } from "../../context/ContextProvider.jsx";
import './home.css';

const Home = () => {
  // const { setTheme, theme } = useContext(Context);
  return (
    <>
      <Header />
      {/* <div className="button">
        <button
          onClick={() => {
            setTheme("light");
            console.log(theme);
          }}
        >
          Light Mode
        </button>
        <button
          onClick={() => {
            setTheme("dark");
            console.log(theme);
          }}
        >
          Dark Mode
        </button>
      </div> */}
    </>
  );
};

export default Home;
