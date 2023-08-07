import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [books, setBooks] = useState([]);
  const [filterdBooks, setFilteredBooks] = useState(books);
  console.log(filterdBooks);
  console.log(books);

  useEffect(() => {
    axios
      .get("https://book-e-sell-node-api.vercel.app/api/book/all")
      .then((res) => {
        setBooks(res.data.result);
        setFilteredBooks(res.data.result);
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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
