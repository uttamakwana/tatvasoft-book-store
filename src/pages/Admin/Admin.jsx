import React, { useContext, useEffect } from "react";
import Login from "../Login/Login";
import { Context } from "../../context/ContextProvider";
import { useLocation } from "react-router-dom";

const Admin = () => {
  const location = useLocation();
  const { setIsAdmin } = useContext(Context);
  useEffect(() => {
    setIsAdmin(true);
  }, []);
  return <Login />;
};

export default Admin;
