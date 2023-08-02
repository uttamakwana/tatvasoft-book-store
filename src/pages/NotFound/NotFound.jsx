import React from "react";
import './notfound.css';
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="page-not-found-container">
      <main className="page-not-found">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <p>
          Go back to the <Link to="/register">register</Link> or try searching.
        </p>
      </main>
    </section>
  );
};

export default NotFound;
