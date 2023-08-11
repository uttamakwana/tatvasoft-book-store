import React, { useContext, useEffect, useState } from "react";
import "./books.css";
import { Book } from "../../containers";
import { Context } from "../../context/ContextProvider";

const Books = () => {
  const { books, setFilteredBooks } = useContext(Context);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  if (search === "") {
    setFilteredBooks(books);
  }

  const handleSearch = () => {
    // const updatedToLowercaseBooks = books.map((book) => {
    //   return
    // });

    console.log(books);
    const updatedBooks = books.filter((book) => {
      return (
        // book.category.toLowerCase().includes(category.toLowerCase()) ||
        book.name.toLowerCase().includes(search.toLowerCase()) ||
        book.category.toLowerCase().includes(search.toLowerCase()) ||
        book.description.toLowerCase().includes(search.toLowerCase()) ||
        String(book.price).toLowerCase().includes(search.toLowerCase())
      );
    });

    setFilteredBooks(updatedBooks);
  };

  return (
    <main className="books" id="books">
      <section className="books__header">
        <h1>Books</h1>
      </section>
      <section className="books__search-bar">
        <div>
          <input
            type="search"
            name="books-search"
            id="books-seach"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="books__search-bar__btn"
            onClick={(e) => {
              setCategory(e.target.value);
              handleSearch();
            }}
          >
            Search
          </button>
        </div>
      </section>
      {/* <section className="books__filters">
        <div>
          <label htmlFor="books-category">Category</label>
          <select
            name="books-category"
            id="books-category"
            onChange={handleSearch}
          >
            {books.map((book) => {
              return (
                <option key={book.id} value={book.category}>
                  {book.category}
                </option>
              );
            })}
          </select>
        </div>
      </section> */}
      <section className="books__container">
        <Book />
      </section>
    </main>
  );
};

export default Books;
