import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Createbook from "../pages/Createbook";
import Books from "../pages/Books";
import Booksdetails from "../pages/Booksdetails";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/books" element={<Books />} />
      <Route path="/books/book-details/:id" element={<Booksdetails />} />
      <Route path="/add-book" element={<Createbook />} />
    </Routes>
  );
};

export default Mainroutes;
