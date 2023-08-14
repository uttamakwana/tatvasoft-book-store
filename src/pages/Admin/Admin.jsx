import React, { useContext } from "react";
import Login from "../Login/Login";
import { Context } from "../../context/ContextProvider";
import { AdminDashbaoard } from "../../components/index.js";

const Admin = () => {
  const { isAdmin } = useContext(Context);
  return <>{isAdmin ? <AdminDashbaoard /> : <Login />}</>;
};

export default Admin;
