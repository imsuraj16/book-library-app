import React, { useContext } from 'react'
import { Bookcontext } from '../context/BookContext'

const Books = () => {
    const [books] = useContext(Bookcontext)
  return (
    <div>
      {
        books.map((book)=>(
            <h1>{book.author}</h1>
        ))
      }
    </div>
  )
}

export default Books
