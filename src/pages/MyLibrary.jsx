import { Link } from "react-router-dom";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";

export default function MyLibrary({
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
  books,
  handleDelete,
  handleEdit,
  handleCancelEdit,
}) {
  return (
    <>
      <Link to="/" className="nav-link">
        Back to Home
      </Link>

      <BookForm
        bookTitle={bookTitle}
        setBookTitle={setBookTitle}
        author={author}
        setAuthor={setAuthor}
        seriesName={seriesName}
        setSeriesName={setSeriesName}
        status={status}
        setStatus={setStatus}
        format={format}
        setFormat={setFormat}
        progressNote={progressNote}
        setProgressNote={setProgressNote}
        rating={rating}
        setRating={setRating}
        notes={notes}
        setNotes={setNotes}
        handleSubmit={handleSubmit}
        editBookID={editBookID}
        handleCancelEdit={handleCancelEdit}
      />

      <BookList
        books={books}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>
  );
}
