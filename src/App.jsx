import { useEffect, useState } from "react";

import "./App.css";
import { supabase } from "./supabase";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [seriesName, setSeriesName] = useState("");
  const [status, setStatus] = useState("");
  const [format, setFormat] = useState("");
  const [progressNote, setProgressNote] = useState("");
  const [rating, setRating] = useState("");
  const [notes, setNotes] = useState("");
  const [editBookID, setEditBookID] = useState(null);

  async function getBooks() {
    const { data } = await supabase.from("book_tracker").select("*");
    console.log(data);
    setBooks(data);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (editBookID) {
      await supabase
        .from("book_tracker")
        .update({
          book_title: bookTitle,
          author: author,
          series_name: seriesName,
          status: status,
          format: format,
          progress_note: progressNote,
          rating: rating,
          notes: notes,
        })
        .eq("id", editBookID);
      setEditBookID(null);
    } else {
      await supabase.from("book_tracker").insert({
        book_title: bookTitle,
        author: author,
        series_name: seriesName,
        status: status,
        format: format,
        progress_note: progressNote,
        rating: rating,
        notes: notes,
      });
    }
    await getBooks();

    setBookTitle("");
    setAuthor("");
    setSeriesName("");
    setStatus("");
    setFormat("");
    setProgressNote("");
    setRating("");
    setNotes("");
  }

  function handleEdit(book) {
    setEditBookID(book.id);
    setBookTitle(book.book_title);
    setAuthor(book.author);
    setSeriesName(book.series_name);
    setStatus(book.status);
    setFormat(book.format);
    setProgressNote(book.progress_note);
    setRating(book.rating);
    setNotes(book.notes);
  }

  async function handleDelete(id) {
    await supabase.from("book_tracker").delete().eq("id", id);
    await getBooks();
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
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
      />
      <BookList
        books={books}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>
  );
}

export default App;
