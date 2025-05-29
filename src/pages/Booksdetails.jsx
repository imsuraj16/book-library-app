import React, { useContext, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Bookcontext } from "../context/BookContext";
import { useForm } from "react-hook-form";

const Booksdetails = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [books, setBooks] = useContext(Bookcontext);
  const [edit, setEdit] = useState(false);
  const { id } = useParams();

  const updateHandler = (bookdata) => {
    const index = books.findIndex((b) => b.id === id);
    // console.log(index);

    setBooks((prev) => {
      let updated = prev.map((b, i) =>
        i === index ? { ...b, ...bookdata } : b
      );
      localStorage.setItem("books", JSON.stringify(updated));
      return updated;
    });
    // let updated = setBooks((prev)=>prev.map((b,i)=>(i===index ? {...b,...bookdata} : b)))
    // console.log(a);

    // console.log(bookdata);

    navigate("/books");
  };

  const deleteHandler = (id) => {
    let newBookList = books.filter((b) => b.id !== id);
    localStorage.setItem("books", JSON.stringify(newBookList));
    setBooks(newBookList);
    navigate("/books");
  };

  const book = books.find((b) => b.id === id);

  if (edit) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f0ebcc] to-[#faf6e8] py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header with Update Icon */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#8b6914] rounded-full mb-4 shadow-lg">
              <span className="text-3xl">✏️</span>
            </div>
            <h1 className="text-5xl font-bold text-[#8b6914] mb-3">
              Update Book Details
            </h1>
            <p className="text-[#a67c00] text-xl max-w-2xl mx-auto">
              Modify the information for your selected book in your collection
            </p>
          </div>

          {/* Form Container */}
          <form
            onSubmit={handleSubmit(updateHandler)}
            className="bg-white rounded-3xl shadow-2xl border-2 border-[#e6d99c] p-10 relative overflow-hidden"
          >
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#faf6e8] rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#f0ebcc] rounded-full translate-y-12 -translate-x-12 opacity-30"></div>

            <div className="space-y-8 relative z-10">
              {/* Primary Info Section */}
              <div className="bg-[#faf6e8] rounded-2xl p-6 border border-[#e6d99c]">
                <h3 className="text-2xl font-semibold text-[#8b6914] mb-6 flex items-center gap-2">
                  📖 Primary Information
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Book Title */}
                  <div className="lg:col-span-2">
                    <label className="block text-[#8b6914] font-semibold mb-3 text-lg">
                      Book Title *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter book title"
                      className="w-full px-5 py-4 rounded-2xl border-2 border-[#e6d99c] bg-white focus:border-[#d4c55a] focus:outline-none focus:ring-3 focus:ring-[#d4c55a]/30 text-[#6b5b00] placeholder-[#a67c00]/60 text-lg transition-all duration-200"
                      {...register("title")}
                      defaultValue={book?.title}
                    />
                  </div>

                  {/* Author */}
                  <div>
                    <label className="block text-[#8b6914] font-semibold mb-3 text-lg">
                      Author *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter author name"
                      className="w-full px-5 py-4 rounded-2xl border-2 border-[#e6d99c] bg-white focus:border-[#d4c55a] focus:outline-none focus:ring-3 focus:ring-[#d4c55a]/30 text-[#6b5b00] placeholder-[#a67c00]/60 text-lg transition-all duration-200"
                      {...register("author")}
                      defaultValue={book?.author}
                    />
                  </div>

                  {/* ISBN */}
                  <div>
                    <label className="block text-[#8b6914] font-semibold mb-3 text-lg">
                      ISBN *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter ISBN"
                      className="w-full px-5 py-4 rounded-2xl border-2 border-[#e6d99c] bg-white focus:border-[#d4c55a] focus:outline-none focus:ring-3 focus:ring-[#d4c55a]/30 text-[#6b5b00] placeholder-[#a67c00]/60 text-lg transition-all duration-200"
                      {...register("isbnno")}
                      defaultValue={book?.isbnno}
                    />
                  </div>
                </div>
              </div>

              {/* Publication Details Section */}
              <div className="bg-[#f0ebcc] rounded-2xl p-6 border border-[#e6d99c]">
                <h3 className="text-2xl font-semibold text-[#8b6914] mb-6 flex items-center gap-2">
                  📅 Publication Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Publication Year */}
                  <div>
                    <label className="block text-[#8b6914] font-semibold mb-3 text-lg">
                      Publication Year *
                    </label>
                    <input
                      type="number"
                      placeholder="2024"
                      className="w-full px-5 py-4 rounded-2xl border-2 border-[#e6d99c] bg-white focus:border-[#d4c55a] focus:outline-none focus:ring-3 focus:ring-[#d4c55a]/30 text-[#6b5b00] placeholder-[#a67c00]/60 text-lg transition-all duration-200"
                      {...register("publish")}
                      defaultValue={book?.publish}
                    />
                  </div>

                  {/* Publisher */}
                  <div>
                    <label className="block text-[#8b6914] font-semibold mb-3 text-lg">
                      Publisher *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter publisher name"
                      className="w-full px-5 py-4 rounded-2xl border-2 border-[#e6d99c] bg-white focus:border-[#d4c55a] focus:outline-none focus:ring-3 focus:ring-[#d4c55a]/30 text-[#6b5b00] placeholder-[#a67c00]/60 text-lg transition-all duration-200"
                      {...register("publisher")}
                      defaultValue={book?.publisher}
                    />
                  </div>

                  {/* Pages */}
                  <div>
                    <label className="block text-[#8b6914] font-semibold mb-3 text-lg">
                      Number of Pages
                    </label>
                    <input
                      type="number"
                      placeholder="300"
                      className="w-full px-5 py-4 rounded-2xl border-2 border-[#e6d99c] bg-white focus:border-[#d4c55a] focus:outline-none focus:ring-3 focus:ring-[#d4c55a]/30 text-[#6b5b00] placeholder-[#a67c00]/60 text-lg transition-all duration-200"
                      {...register("pages")}
                      defaultValue={book?.pages}
                    />
                  </div>
                </div>
              </div>

              {/* Category & Language Section */}
              <div className="bg-white rounded-2xl p-6 border-2 border-[#e6d99c]">
                <h3 className="text-2xl font-semibold text-[#8b6914] mb-6 flex items-center gap-2">
                  🏷️ Category & Language
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Genre */}
                  <div>
                    <label className="block text-[#8b6914] font-semibold mb-3 text-lg">
                      Genre *
                    </label>
                    <select
                      className="w-full px-5 py-4 rounded-2xl border-2 border-[#e6d99c] bg-white focus:border-[#d4c55a] focus:outline-none focus:ring-3 focus:ring-[#d4c55a]/30 text-[#6b5b00] text-lg transition-all duration-200"
                      {...register("genre")}
                      defaultValue={book?.genre}
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
                  </div>

                  {/* Language */}
                  <div>
                    <label className="block text-[#8b6914] font-semibold mb-3 text-lg">
                      Language *
                    </label>
                    <select
                      className="w-full px-5 py-4 rounded-2xl border-2 border-[#e6d99c] bg-white focus:border-[#d4c55a] focus:outline-none focus:ring-3 focus:ring-[#d4c55a]/30 text-[#6b5b00] text-lg transition-all duration-200"
                      {...register("language")}
                      defaultValue={book?.language}
                    >
                      <option value="">Select language</option>
                      <option value="english">English</option>
                      <option value="spanish">Spanish</option>
                      <option value="french">French</option>
                      <option value="german">German</option>
                      <option value="hindi">Hindi</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Rating & Media Section */}
              <div className="bg-gradient-to-r from-[#faf6e8] to-[#f0ebcc] rounded-2xl p-6 border border-[#e6d99c]">
                <h3 className="text-2xl font-semibold text-[#8b6914] mb-6 flex items-center gap-2">
                  ⭐ Rating & Media
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Rating */}
                  <div>
                    <label className="block text-[#8b6914] font-semibold mb-3 text-lg">
                      Your Rating
                    </label>
                    <select
                      className="w-full px-5 py-4 rounded-2xl border-2 border-[#e6d99c] bg-white focus:border-[#d4c55a] focus:outline-none focus:ring-3 focus:ring-[#d4c55a]/30 text-[#6b5b00] text-lg transition-all duration-200"
                      {...register("rating")}
                      defaultValue={book?.rating}
                    >
                      <option value="">Rate this book</option>
                      <option value="1">⭐ 1 Star</option>
                      <option value="2">⭐⭐ 2 Stars</option>
                      <option value="3">⭐⭐⭐ 3 Stars</option>
                      <option value="4">⭐⭐⭐⭐ 4 Stars</option>
                      <option value="5">⭐⭐⭐⭐⭐ 5 Stars</option>
                    </select>
                    <span className="text-[#a67c00] text-sm mt-1 block">
                      (Optional)
                    </span>
                  </div>

                  {/* Book Cover URL */}
                  <div className="lg:col-span-2">
                    <label className="block text-[#8b6914] font-semibold mb-3 text-lg">
                      Book Cover URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://example.com/book-cover.jpg"
                      className="w-full px-5 py-4 rounded-2xl border-2 border-[#e6d99c] bg-white focus:border-[#d4c55a] focus:outline-none focus:ring-3 focus:ring-[#d4c55a]/30 text-[#6b5b00] placeholder-[#a67c00]/60 text-lg transition-all duration-200"
                      {...register("url")}
                      defaultValue={book?.url}
                    />
                    <p className="text-[#a67c00] text-sm mt-1">
                      Optional: Update the book cover image URL
                    </p>
                  </div>
                </div>
              </div>

              {/* Description Section */}
              <div className="bg-white rounded-2xl p-6 border-2 border-[#e6d99c]">
                <h3 className="text-2xl font-semibold text-[#8b6914] mb-6 flex items-center gap-2">
                  📝 Description & Notes
                </h3>

                <div>
                  <label className="block text-[#8b6914] font-semibold mb-3 text-lg">
                    Description / Notes *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Update the description or personal notes about this book..."
                    className="w-full px-5 py-4 rounded-2xl border-2 border-[#e6d99c] bg-white focus:border-[#d4c55a] focus:outline-none focus:ring-3 focus:ring-[#d4c55a]/30 text-[#6b5b00] placeholder-[#a67c00]/60 text-lg resize-none transition-all duration-200"
                    {...register("description")}
                    defaultValue={book?.description}
                  />
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-[#8b6914] to-[#6b5b00] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:from-[#6b5b00] hover:to-[#5a4a00] focus:outline-none focus:ring-4 focus:ring-[#8b6914]/30 transform hover:scale-[1.02] hover:shadow-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
                >
                  ✏️ Update Book Details
                </button>
                <button
                  onClick={() => setEdit(false)}
                  type="reset"
                  className="flex-1 sm:flex-none bg-gradient-to-r from-[#e6d99c] to-[#d4c55a] text-[#8b6914] px-10 py-5 rounded-2xl font-bold text-xl hover:from-[#d4c55a] hover:to-[#c9b84e] focus:outline-none focus:ring-4 focus:ring-[#e6d99c]/50 transform hover:scale-[1.02] hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>

          {/* Helper Text */}
          <div className="text-center mt-8">
            <p className="text-[#a67c00] text-lg">
              Fields marked with * are required • Changes will be saved to your
              collection
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex px-[20rem] py-[2rem] gap-[10rem]">
        <div
          style={{
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
          }}
          className="w-[15rem] h-[20rem] overflow-hidden hover:scale-110 duration-150 transition-all ease-linear float-animation"
        >
          <img
            className="w-full h-full object-cover object-top-right"
            src={book?.url}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-[4rem]">{book?.title}</h1>
          <p className="text-[1.4em]">{book?.genre}</p>
          <button
            onClick={() => setEdit(true)}
            className="bg-red-500 h-fit px-[3rem] py-2 rounded-md mt-3 cursor-pointer"
          >
            Edit
          </button>
          <button
            onClick={() => deleteHandler(book.id)}
            className="bg-yellow-500 px-[2rem] py-2 rounded-md ml-2"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="w-full bg-[#F0EBCC] px-[8rem]">
        <div className="w-full px-[10rem] py-[3rem] flex gap-[15rem] bg-amber-50 ">
          <div>
            <h1 className="w-[35rem]">{book?.description}</h1>
          </div>

          <div className="w-full flex flex-col gap-[2rem]">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-medium">Publisher</h1>
              <h1>{book?.publisher}</h1>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-2xl">Language</h1>
              <h1>{book?.language}</h1>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-2xl">Publish year</h1>
              <h1>{book?.publish}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booksdetails;
