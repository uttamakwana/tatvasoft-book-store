import React, { useContext } from "react";
import { Context } from "../../context/ContextProvider";
import "./book.css";
import axios from "axios";

const Book = () => {
  const { books, filterdBooks } = useContext(Context);

  const handleDelete = async (id) => {
    try {
      console.log("delete working");
      const response = await axios.delete(
        `http://localhost:4000/api/v1/users/delete/${id}`,
        { withCredentials: true }
      );
      console.log(response);
    } catch (error) {}
  };
  return (
    filterdBooks &&
    filterdBooks.map((book) => {
      return (
        <div className="book-container" key={book.id}>
          <div className="book-container__book-image">
            <img src={book.imageURL} alt="none" />
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
            <button>Edit Book</button>
            <button onClick={() => handleDelete(book._id)}>Delete Book</button>
          </div>
        </div>
      );
    })
  );
};

export default Book;
