import React from "react";

export default function BookList({ books, handleDelete, handleEdit }) {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <p>Book Title: {book.book_title} </p>
          <p>Author: {book.author} </p>
          <p>Status: {book.status}</p>
          <p>Format: {book.format}</p>
          <p>Progress Note: {book.progress_note}</p>
          <p>Rating: {book.rating}</p>
          <p>Notes: {book.notes}</p>
          <button onClick={() => handleDelete(book.id)}>Delete</button>
          <button onClick={() => handleEdit(book)}>Edit</button>
        </div>
      ))}
    </div>
  );
}
