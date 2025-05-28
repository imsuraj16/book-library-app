import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Bookcontext } from "../context/BookContext";

const Booksdetails = () => {
  const [books, setBooks] = useContext(Bookcontext);
  const { id } = useParams();

  const book = books.find((b) => b.id === id);
  console.log(book);

  return (
    <div className="w-full">
      <div className="flex px-[20rem] py-[2rem] gap-[10rem]">
        <div
          style={{
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
          }}
          className="w-[15rem] h-[20rem] overflow-hidden"
        >
          <img
            className="w-full h-full object-cover object-top-right"
            src={book.url}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-[4rem]">{book.title}</h1>
          <p className="text-[1rem]">{book.genre}</p>
        </div>
      </div>
      <div className="w-full bg-[#F0EBCC] px-[10rem]">
        <div className="w-full px-[10rem] py-[3rem] flex gap-[20rem] bg-amber-50 ">
          <div>
            <h1 className="w-[35rem]">{book.description}</h1>
          </div>

          <div className="w-full flex flex-col gap-[2rem]">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-medium">Publisher</h1>
              <h1>{book.publisher}</h1>
            </div>

            <div lassName="flex flex-col gap-2">
              <h1 className="text-2xl">Language</h1>
              <h1>{book.language}</h1>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-2xl">Publish year</h1>
              <h1>{book.publish}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booksdetails;
