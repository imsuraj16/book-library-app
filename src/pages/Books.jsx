import React, { useContext } from "react";
import { Bookcontext } from "../context/BookContext";
import Singlebook from "../components/Singlebook";
import { useNavigate } from "react-router-dom";

const Books = () => {
  const navigate = useNavigate()
  const { books } = useContext(Bookcontext);

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
    <div className="min-h-screen bg-gradient-to-br from-[#f0ebcc] via-[#f5f1d8] to-[#ede6b8] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Animated Book Icon */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#e4c815] to-[#d4b515] rounded-2xl shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
            <div className="absolute inset-4 bg-white rounded-lg shadow-inner">
              <div className="h-full flex flex-col justify-center items-center">
                <div className="w-8 h-1 bg-[#e4c815] rounded mb-2"></div>
                <div className="w-6 h-1 bg-gray-300 rounded mb-1"></div>
                <div className="w-8 h-1 bg-gray-300 rounded mb-1"></div>
                <div className="w-5 h-1 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
          {/* Floating elements */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#e4c815] rounded-full opacity-60 animate-bounce"></div>
          <div className="absolute -bottom-1 -left-3 w-4 h-4 bg-[#d4b515] rounded-full opacity-40 animate-pulse"></div>
        </div>

        {/* Main Message */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          No Books
          <span className="block text-[#e4c815] text-4xl md:text-5xl mt-2">
            Found Yet
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Your library is waiting to be filled with amazing stories.<br />
          <span className="text-[#c9b50f] font-medium">Start your reading journey today!</span>
        </p>

        {/* Call to Action Button */}
        <div className="space-y-4">
          <button onClick={()=>navigate("/add-book")} className="bg-gradient-to-r from-[#e4c815] to-[#d4b515] hover:from-[#d4b515] hover:to-[#c4a515] text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-lg">
            Add Your First Book
          </button>
          
          {/* Secondary action */}
          <div className="text-gray-500 text-sm">
            or <span className="text-[#c9b50f] hover:text-[#b8a40f] cursor-pointer underline">browse recommendations</span>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center space-x-8 opacity-30">
          <div className="w-2 h-8 bg-[#e4c815] rounded-full animate-pulse"></div>
          <div className="w-2 h-12 bg-[#d4b515] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-6 bg-[#c9b50f] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Books;