import { useState } from 'react'

import './App.css'
import { supabase } from './supabase'
import BookForm from './components/BookForm'
import BookList from './components/BookList'

function App() {
const [books, setBooks] = useState([])

async function getBooks() {
  const { data } = await supabase.from("book_tracker").select("*")
  console.log(data)
  setBooks(data)
}


useState(() => {
  getBooks()

}, [])

  return (
    <>
    
     <BookForm />
     <BookList />
    </>
  )
}

export default App
