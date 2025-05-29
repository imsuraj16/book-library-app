import React, { createContext, useEffect, useState } from "react";

export const Bookcontext = createContext(null);

const BookContext = (props) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(JSON.parse(localStorage.getItem("books")));
  }, []);

  return (
    <>
      <Bookcontext.Provider value={[books, setBooks]}>
        {props.children}
      </Bookcontext.Provider>
    </>
  );
};

export default BookContext;

// {
//     title: "The Alchemist",
//     id : 'jsfhiehfiljeilfj',
//     author: "Paulo Coelho",
//     isbnno: "9780061122415",
//     publish: 1988,
//     genre: "fiction",
//     pages: 208,
//     publisher: "HarperCollins",
//     language: "english",
//     rating: "3",
//     description: "To Kill a Mockingbird is a deeply moving and thought-provoking novel written by Harper Lee, first published in 1960. Set in the 1930s during the Great Depression in the fictional town of Maycomb, Alabama, the story explores themes of racial injustice, moral growth, and the loss of innocence through the eyes of a young girl named Jean Louise “Scout” Finch.Scout lives with her older brother, Jem, and their widowed father, Atticus Finch, a principled and respected lawyer. The siblings spend their summers immersed in innocent adventures, often with their curious friend Dill, fascinated by their mysterious neighbor Boo Radley, who never leaves his house. However, the children’s world begins to change when Atticus takes on the case of Tom Robinson, a Black man falsely accused of raping a white woman, Mayella Ewell.",
//     url: "https://imgs.search.brave.com/bDZWUh7E280xoHWS8j0TAG__BVxBGFj4ZlPhwzsvBh8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vSDhzS1Nx/NHQzQUFlSzBUU0FS/SWRCNkthdWRzYmh6/SFp4VERpaFY2cHcw/by9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/TG0xbC9aR2xoTFdG/dFlYcHZiaTVqL2Iy/MHZhVzFoWjJWekww/a3YvTlRGTWJuUk1W/V1UwYmt3dS9hbkJu.jpeg",
//   }
