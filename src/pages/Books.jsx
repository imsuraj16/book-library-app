import React, { useContext } from "react";
import { Bookcontext } from "../context/BookContext";
import Singlebook from "../components/Singlebook";

const Books = () => {
  const {books} = useContext(Bookcontext);

 

  if (books.length > 0) {
    return (
      <div className="w-full px-[4rem]">
        <h1 className="text-[4rem] py-[1rem]">
          Your <span className="text-[#e4c815]">Books</span>..
        </h1>
        <div className="flex gap-6 flex-wrap">
          {books.map((book) => (
            <Singlebook book={book} key={book.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="px-[4rem]">
      <h1 className="text-[3rem] text-red-600">No books Found...</h1>
    </div>
  );
};

export default Books;
