import React from "react";

export default function BookList({ books, handleDelete, handleEdit }) {
  return (
    <div className="book-list">
      <h2>Saved Books</h2>
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <p><strong>Book Title:</strong> {book.book_title} </p>
          <p> <strong>Author:</strong>  {book.author} </p>
          <p> <strong>Series Name:</strong> {book.series_name}</p>
          <p> <strong>Status:</strong>  {book.status}</p>
          <p> <strong>Format:</strong>  {book.format}</p>
          <p> <strong>Progress Note:</strong> {book.progress_note}</p>
          <p> <strong>Rating:</strong> {book.rating}</p>
          <p> <strong>Notes:</strong>  {book.notes}</p>
          <div className="book-buttons">
            <button onClick={() => handleDelete(book.id)}>Delete</button>
            <button onClick={() => handleEdit(book)}>Edit</button>
          </div>
        </div>
      ))}
    </div>
  );
}
