import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Bookcontext } from "../context/BookContext";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Createbook = () => {
  const {books, setBooks} = useContext(Bookcontext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    data.id = nanoid();
    // setBooks((prev)=>[...prev,data])
    const copyData = [...books];
    copyData.push(data);
    setBooks(copyData);
    localStorage.setItem('books',JSON.stringify(copyData))
    reset();
    navigate("/books");
  };

  return (
    <div className="min-h-screen bg-[#f0ebcc] py-4 md:py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-[#8b6914] mb-2">
            Add New Book
          </h1>
          <p className="text-[#a67c00] text-base md:text-lg">
            Fill in the details to add a book to your collection
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#faf6e8] rounded-2xl shadow-lg border border-[#e6d99c] p-4 md:p-8">
          <form onSubmit={handleSubmit(submitHandler)} className="space-y-4 md:space-y-6">
            {/* Book Title */}
            <div>
              <label className="block text-[#8b6914] font-semibold mb-2 text-base md:text-lg">
                Book Title *
              </label>
              <input
                type="text"
                placeholder="Enter book title"
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border-2 border-[#e6d99c] bg-white focus:border-[#d4c55a] focus:outline-none focus:ring-2 focus:ring-[#d4c55a]/20 text-[#6b5b00] placeholder-[#a67c00]/60 text-base md:text-lg"
                {...register("title", {
                  required: "Book title should not be empty..",
                })}
              />
              <small className="text-red-500 text-xs md:text-sm">
                {errors?.title?.message}
              </small>
            </div>

            {/* Author */}
            <div>
              <label className="block text-[#8b6914] font-semibold mb-2 text-base md:text-lg">
                Author *
              </label>
              <input
                type="text"
                placeholder="Enter author name"
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border-2 border-[#e6d99c] bg-white focus:border-[#d4c55a] focus:outline-none focus:ring-2 focus:ring-[#d4c55a]/20 text-[#6b5b00] placeholder-[#a67c00]/60 text-base md:text-lg"
                {...register("author", {
                  required: "Author should not be empty..",
                })}
              />
              <small className="text-red-500 text-xs md:text-sm">
                {errors?.author?.message}
              </small>
            </div>

            {/* ISBN and Publication Year Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-[#8b6914] font-semibold mb-2 text-base md:text-lg">
                  ISBN
                </label>
                <input
                  type="text"
                  placeholder="Enter ISBN"
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border-2 border-[#e6d99c] bg-white focus:border-[#d4c55a] focus:outline-none focus:ring-2 focus:ring-[#d4c55a]/20 text-[#6b5b00] placeholder-[#a67c00]/60 text-base md:text-lg"
                  {...register("isbnno", {
                    required: "ISBN should not be empty..",
                  })}
                />
                <small className="text-red-500 text-xs md:text-sm">
                  {errors?.isbnno?.message}
                </small>
              </div>
              <div>
                <label className="block text-[#8b6914] font-semibold mb-2 text-base md:text-lg">
                  Publication Year
                </label>
                <input
                  type="number"
                  placeholder="2024"
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border-2 border-[#e6d99c] bg-white focus:border-[#d4c55a] focus:outline-none focus:ring-2 focus:ring-[#d4c55a]/20 text-[#6b5b00] placeholder-[#a67c00]/60 text-base md:text-lg"
                  {...register("publish", {
                    required: "Publish yaer should not be empty..",
                  })}
                />
                <small className="text-red-500 text-xs md:text-sm">
                  {errors?.publish?.message}
                </small>
              </div>
            </div>

            {/* Genre and Pages Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-[#8b6914] font-semibold mb-2 text-base md:text-lg">
                  Genre *
                </label>
                <select
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border-2 border-[#e6d99c] bg-white focus:border-[#d4c55a] focus:outline-none focus:ring-2 focus:ring-[#d4c55a]/20 text-[#6b5b00] text-base md:text-lg"
                  {...register("genre", { required: "Select genre..." })}
                >
                  <option value="">Select genre</option>
                  <option value="fiction">Fiction</option>
                  <option value="non-fiction">Non-Fiction</option>
                  <option value="mystery">Mystery</option>
                  <option value="romance">Romance</option>
                  <option value="sci-fi">Science Fiction</option>
                  <option value="fantasy">Fantasy</option>
                  <option value="biography">Biography</option>
                  <option value="history">History</option>
                  <option value="self-help">Self Help</option>
                  <option value="technology">Technology</option>
                </select>
                <small className="text-red-500 text-xs md:text-sm">
                  {errors?.genre?.message}
                </small>
              </div>
              <div>
                <label className="block text-[#8b6914] font-semibold mb-2 text-base md:text-lg">
                  Number of Pages
                </label>
                <input
                  type="number"
                  placeholder="300"
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border-2 border-[#e6d99c] bg-white focus:border-[#d4c55a] focus:outline-none focus:ring-2 focus:ring-[#d4c55a]/20 text-[#6b5b00] placeholder-[#a67c00]/60 text-base md:text-lg"
                  {...register("pages")}
                />
              </div>
            </div>

            {/* Publisher and Language Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-[#8b6914] font-semibold mb-2 text-base md:text-lg">
                  Publisher
                </label>
                <input
                  type="text"
                  placeholder="Enter publisher name"
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border-2 border-[#e6d99c] bg-white focus:border-[#d4c55a] focus:outline-none focus:ring-2 focus:ring-[#d4c55a]/20 text-[#6b5b00] placeholder-[#a67c00]/60 text-base md:text-lg"
                  {...register("publisher", {
                    required: "Publisher should not be empty..",
                  })}
                />
                <small className="text-red-500 text-xs md:text-sm">
                  {errors?.publisher?.message}
                </small>
              </div>
              <div>
                <label className="block text-[#8b6914] font-semibold mb-2 text-base md:text-lg">
                  Language
                </label>
                <select
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border-2 border-[#e6d99c] bg-white focus:border-[#d4c55a] focus:outline-none focus:ring-2 focus:ring-[#d4c55a]/20 text-[#6b5b00] text-base md:text-lg"
                  {...register("language", { required: "Select Language.." })}
                >
                  <option value="">Select language</option>
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                  <option value="hindi">Hindi</option>
                  <option value="other">Other</option>
                </select>
                <small className="text-red-500 text-xs md:text-sm">
                  {errors?.language?.message}
                </small>
              </div>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-[#8b6914] font-semibold mb-2 text-base md:text-lg">
                Your Rating
              </label>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <select
                  className="w-full sm:w-auto px-3 md:px-4 py-2 md:py-3 rounded-xl border-2 border-[#e6d99c] bg-white focus:border-[#d4c55a] focus:outline-none focus:ring-2 focus:ring-[#d4c55a]/20 text-[#6b5b00] text-base md:text-lg"
                  {...register("rating")}
                >
                  <option value="">Rate this book</option>
                  <option value="1">⭐ 1 Star</option>
                  <option value="2">⭐⭐ 2 Stars</option>
                  <option value="3">⭐⭐⭐ 3 Stars</option>
                  <option value="4">⭐⭐⭐⭐ 4 Stars</option>
                  <option value="5">⭐⭐⭐⭐⭐ 5 Stars</option>
                </select>
                <span className="text-[#a67c00] text-xs md:text-sm">(Optional)</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-[#8b6914] font-semibold mb-2 text-base md:text-lg">
                Description / Notes
              </label>
              <textarea
                rows={3}
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border-2 border-[#e6d99c] bg-white focus:border-[#d4c55a] focus:outline-none focus:ring-2 focus:ring-[#d4c55a]/20 text-[#6b5b00] placeholder-[#a67c00]/60 text-base md:text-lg md:rows-4"
                placeholder="Write a brief description or personal notes about this book..."
                {...register("description", {
                  required: "Please enter description....",
                })}
              />
              <small className="text-red-500 text-xs md:text-sm">
                {errors?.description?.message}
              </small>
            </div>

            {/* Book Cover URL */}
            <div>
              <label className="block text-[#8b6914] font-semibold mb-2 text-base md:text-lg">
                Book Cover URL
              </label>
              <input
                type="url"
                placeholder="https://example.com/book-cover.jpg"
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border-2 border-[#e6d99c] bg-white focus:border-[#d4c55a] focus:outline-none focus:ring-2 focus:ring-[#d4c55a]/20 text-[#6b5b00] placeholder-[#a67c00]/60 text-base md:text-lg"
                {...register("url")}
              />
              <p className="text-[#a67c00] text-xs md:text-sm mt-1">
                Optional: Add a URL to the book cover image
              </p>
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6">
              <button
                type="submit"
                className="w-full sm:flex-1 bg-[#8b6914] text-white px-4 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:bg-[#6b5b00] focus:outline-none focus:ring-4 focus:ring-[#8b6914]/20 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
              >
                📚 Add Book to Collection
              </button>
              <button
                type="button"
                className="w-full sm:w-auto bg-[#e6d99c] text-[#8b6914] px-4 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:bg-[#d4c55a] focus:outline-none focus:ring-4 focus:ring-[#e6d99c]/40 transform hover:scale-[1.02] transition-all duration-200"
                onClick={() => reset()}
              >
                Clear Form
              </button>
            </div>
          </form>
        </div>

        {/* Helper Text */}
        <div className="text-center mt-4 md:mt-6">
          <p className="text-[#a67c00] text-xs md:text-sm">
            Fields marked with * are required
          </p>
        </div>
      </div>
    </div>
  );
};

export default Createbook;