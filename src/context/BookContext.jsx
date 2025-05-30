import React, { createContext, useEffect, useState } from "react";

export const Bookcontext = createContext(null);

const BookContext = (props) => {
  const [books, setBooks] = useState([]);



  const [fav, setfav] = useState([]);

  useEffect(() => {
    setBooks(JSON.parse(localStorage.getItem("books") || "[]"));
    setfav(JSON.parse(localStorage.getItem("fav") || "[]"));
  }, []);

  return (
    <>
      <Bookcontext.Provider value={{books, setBooks, fav, setfav}}>
        {props.children}
      </Bookcontext.Provider>
    </>
  );
};

export default BookContext;


