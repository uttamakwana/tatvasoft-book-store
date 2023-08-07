import React, { useContext } from "react";
import { Context } from "../../context/ContextProvider";
import "./book.css";

const Book = () => {
  const { books, filterdBooks } = useContext(Context);
  return (
    filterdBooks &&
    filterdBooks.map((book) => {
      return (
        <div className="book-container">
          <div className="book-container__book-image">
            <img src={book.base64image} alt="none" />
          </div>
          <div className="book-container__book-content">
            <p className="book-container__book-content__book-heading">
              Name: <strong>{book.name}</strong>
            </p>
            <p className="book-container__book-content__book-description">
              Desc: <span>{book.description}</span>
            </p>
            <p className="book-container__book-content__book-category">
              Category: <strong>{book.category}</strong>
            </p>
            <p className="book-container__book-content__book-price">
              Price: <strong>{book.price}</strong>
            </p>
          </div>
        </div>
      );
    })
  );
};

export default Book;
