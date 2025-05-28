import React from "react";
import { NavLink } from "react-router-dom";

const Navabar = () => {
  return (
    <div className="w-full px-[4rem] flex items-center justify-between">
      <div>
        <h1 className="text-3xl text-black">BookVault</h1>
      </div>
      <div className="flex items-center gap-[4rem] text-gray-500">
        <NavLink
          className={(e) => (e.isActive ? "text-yellow-800" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-yellow-800" : "")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-yellow-800" : "")}
          to="/books"
        >
          Books
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-yellow-800" : "")}
          to="/add-book"
        >
          Add Book
        </NavLink>
      </div>
    </div>
  );
};

export default Navabar;
