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

  async function getBooks() {
    const { data } = await supabase.from("book_tracker").select("*");
    console.log(data);
    setBooks(data);
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

      />
      <BookList books={books} />
    </>
  );
}

export default App;
