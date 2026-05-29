import React from "react";
import { Link } from "react-router-dom";

export default function SplashPage() {
  return (
    <main className="splash-page">
      <img
        src="my-library.jpg"
        alt="a room with shelves of books"
        className="image"
      />
      <h1>My Personal Library</h1>
      <p>
        This app keeps track of books a user is currently reading and may want
        to read in the future, as well as the progress status of each along the
        way.
      </p>
      <p>
        It can also store books that were previously read to make a more
        complete library. Complete the fields to add a book to the library.
      </p>

      <Link to="/library" className="nav-link">
        View My Library
      </Link>
    </main>
  );
}
