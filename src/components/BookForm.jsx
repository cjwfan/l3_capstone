import React from "react";

export default function BookForm({
  bookTitle,
  setBookTitle,
  author,
  setAuthor,
  seriesName,
  setSeriesName,
  status,
  setStatus,
  format,
  setFormat,
  progressNote,
  setProgressNote,
  rating,
  setRating,
  notes,
  setNotes,
  handleSubmit,
  editBookID,
}) {
  return (
    <main>
      <h1>My Personal Library</h1>
      <p>Mia is typing: {bookTitle}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Book Title:
          <input
            type="text"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
        <label>
          Series Name:
          <input
            type="text"
            value={seriesName}
            onChange={(e) => setSeriesName(e.target.value)}
          />
        </label>
        <label>
          Status:
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </label>
        <label>
          Format:
          <input
            type="text"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
          />
        </label>
        <label>
          Progress Note:
          <input
            type="text"
            value={progressNote}
            onChange={(e) => setProgressNote(e.target.value)}
          />
        </label>
        <label>
          Rating:
          <input
            type="text"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </label>
        <label>
          Notes:
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
        </label>
        <button type="submit">{editBookID ? "Update Book" : "Add Book"}</button>
      </form>
    </main>
  );
}
