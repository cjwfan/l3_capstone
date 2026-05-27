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
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="tbd">TBD</option>
            <option value="to read">To Read</option>
            <option value="reading">Reading</option>
            <option value="finished">Finished</option>
            <option value="paused">Paused</option>
            <option value="Did not finish">Did Not Finish</option>
          </select>
        </label>
        <label>
          Format:
          <select value={format} onChange={(e) => setFormat(e.target.value)}>
            <option value="tbd">TBD</option>
            <option value="physical">Physical</option>
            <option value="ebook">E-book</option>
            <option value="audiobook">Audiobook</option>
          </select>
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
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="TBD">TBD</option>
            <option value="Bring it Back">Bring it back</option>
            <option value="Meh">Meh</option>
            <option value="Missed it by that Much">
              Missed it by that Much
            </option>
            <option value="Solid">Solid</option>
            <option value="Tell the World!">Tell the World!</option>
          </select>
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
