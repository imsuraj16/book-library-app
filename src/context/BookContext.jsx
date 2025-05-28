import React, { createContext, useState } from 'react'


export const Bookcontext = createContext(null)

const BookContext = (props) => {

    const [books, setBooks] = useState([])
    
  return (
    <>
    <Bookcontext.Provider value={[books, setBooks]}>
        {props.children}
    </Bookcontext.Provider>
        
    </>
  )
}

export default BookContext
