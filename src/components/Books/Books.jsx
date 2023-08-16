import React, { useContext, useEffect, useState } from "react";
import "./books.css";
import { Book } from "../../containers";
import { Context } from "../../context/ContextProvider";
import axios from "axios";

const Books = () => {
  const { books, setFilteredBooks, user } = useContext(Context);
  const [search, setSearch] = useState("");
  const [addBook, setAddBook] = useState(false);
  // const [category, setCategory] = useState("");

  const [bookName, setBookName] = useState("");
  const [bookDescription, setBookDescription] = useState("");
  const [bookCategory, setBookCategory] = useState("");
  const [bookPrice, setBookPrice] = useState("");
  const [bookRating, setBookRating] = useState("");
  const [bookImageURL, setBookImageURL] = useState("");

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

  const handleBookAddSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:4000/api/v1/books/addBook",
      {
        id: books.length + 1,
        name: bookName,
        description: bookDescription,
        category: bookCategory,
        price: bookPrice,
        rating: bookRating,
        imageURL: bookImageURL,
        addedBy: user._id,
        answer: "true",
      },
      { withCredentials: true }
    );
    console.log(response);
    setFilteredBooks(response.data.data);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setBookImageURL(e.target.result); // Set the data URL as the image source
      };

      reader.readAsDataURL(file);
    }
  };

  // console.log(bookImageURL);

  return (
    <main className="books" id="books">
      <section className="books__header">
        <h1>Books</h1>
        <button
          onClick={() => {
            setAddBook(!addBook);
          }}
        >
          Want to add book?
        </button>
      </section>

      {addBook && (
        <div>
          <form onSubmit={handleBookAddSubmit}>
            <div>
              <input
                type="text"
                name="bookName"
                id="bookName"
                required
                onChange={(e) => setBookName(e.target.value)}
                placeholder="Book name"
              />
            </div>
            <div>
              <input
                type="text"
                name="bookDescription"
                id="bookDescription"
                required
                placeholder="Book Description"
                onChange={(e) => setBookDescription(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                name="bookCategory"
                id="bookCategory"
                required
                placeholder="Book Category"
                onChange={(e) => setBookCategory(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                name="bookPrice"
                id="bookPrice"
                required
                placeholder="Book Price"
                onChange={(e) => setBookPrice(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                name="book Rating"
                id="book Rating"
                required
                placeholder="Book Rating"
                onChange={(e) => setBookRating(e.target.value)}
              />
            </div>
            <div>
              <input
                type="file"
                name="bookImageURL"
                id="bookImageURL"
                required
                placeholder="Add image of book"
                onChange={(e) => {
                  handleImageUpload(e);
                }}
              />
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      )}
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
