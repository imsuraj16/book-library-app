import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navabar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full relative px-4 md:px-8 lg:px-16 flex items-center justify-between py-4">
      <div>
        <h1 className="text-2xl md:text-3xl text-black">
          <span className="text-amber-700 text-3xl md:text-5xl">Book</span>Vault
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8 text-gray-500">
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
        <NavLink
          className={(e) => (e.isActive ? "text-yellow-800" : "")}
          to="/favourites"
        >
          Favourites
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col gap-1 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="w-6 h-0.5 bg-gray-600 transition-all"></span>
        <span className="w-6 h-0.5 bg-gray-600 transition-all"></span>
        <span className="w-6 h-0.5 bg-gray-600 transition-all"></span>
      </button>

      {/* Mobile Navigation with animation */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-lg md:hidden z-50 transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-[500px] opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-95"
        }`}
        style={{ transformOrigin: "top" }}
      >
        <div className="flex flex-col p-4 gap-4 text-gray-500">
          <NavLink
            className={(e) => (e.isActive ? "text-yellow-800" : "")}
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-yellow-800" : "")}
            to="/about"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-yellow-800" : "")}
            to="/books"
            onClick={() => setIsMenuOpen(false)}
          >
            Books
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-yellow-800" : "")}
            to="/add-book"
            onClick={() => setIsMenuOpen(false)}
          >
            Add Book
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-yellow-800" : "")}
            to="/favourites"
            onClick={() => setIsMenuOpen(false)}
          >
            Favourites
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navabar;
