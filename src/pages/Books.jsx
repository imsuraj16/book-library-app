import React, { useContext } from "react";
import { Bookcontext } from "../context/BookContext";
import Singlebook from "../components/Singlebook";

const Books = () => {
  const [books] = useContext(Bookcontext);

  const renderStars = (rating) => {
    const filled = "⭐".repeat(Number(rating));
    const empty = "☆".repeat(5 - Number(rating));
    return filled + empty;
  };

  return (
    <div className="w-full px-[4rem]">
      <h1 className="text-[4rem] py-[1rem]">
        Your <span className="text-[#e4c815]">Books</span>..
      </h1>
      <div className="flex gap-6 flex-wrap">
        {books.map((book) => (
         <Singlebook book = {book} renderStars = {renderStars} key = {book.id}/>
        ))}
      </div>
    </div>
  );
};

export default Books;
