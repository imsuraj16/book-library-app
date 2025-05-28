import React from "react";
import { NavLink } from "react-router-dom";

const Navabar = () => {
  return (
    <div className="w-full px-[4rem] flex items-center justify-between">
      <div>
        <h1 className="text-3xl text-black">BookVault</h1>
      </div>
      <div className="flex items-center gap-[4rem] text-gray-500">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/books'>Books</NavLink>
        <NavLink to='/add-book'>Add Book</NavLink>
      </div>
    </div>
  );
};

export default Navabar;
