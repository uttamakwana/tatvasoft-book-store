import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [books, setBooks] = useState([]);
  const [filterdBooks, setFilteredBooks] = useState(books);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminData, setAdminData] = useState({});
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [authToken, setAuthToken] = useState("");
  // console.log(filterdBooks);
  // console.log(books);

  useEffect(() => {
    axios
      .post(
        "http://localhost:4000/api/v1/books/getBooks",
        {},
        { withCredentials: true }
      )
      .then((res) => {
        setBooks(res.data.data);
        setFilteredBooks(res.data.data);
        console.log(res);
      });
  }, []);

  return (
    <Context.Provider
      value={{
        theme,
        setTheme,
        books,
        setBooks,
        filterdBooks,
        setFilteredBooks,
        isAdmin,
        setIsAdmin,
        adminData,
        setAdminData,
        users,
        setUsers,
        user,
        setUser,
        authToken,
        setAuthToken,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
