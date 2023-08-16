import React, { useContext } from "react";
import { Header, Books } from "../../components";
import { Context } from "../../context/ContextProvider";
import Login from "../Login/Login";

const BooksPage = () => {
  const { authToken } = useContext(Context);
  return (
    // <>
    //   {authToken ? (
    //     <>
    //       <Header />
    //       <Books />
    //     </>
    //   ) : (
    //     <Login />
    //   )}
    // </>
    <>
      <Header />
      <Books />
    </>
  );
};

export default BooksPage;
