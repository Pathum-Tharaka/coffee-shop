import React, { useState } from "react";
import {
  FaShoppingCart,
  FaSearch,
  FaCoffee,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-4 py-2 z-20">
      <a
        href="#"
        className="text-2xl flex items-center justify-center gap-5 hover:text-yellow-700"
      >
        <FaCoffee /> My Coffee Shop
      </a>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <nav
        className={`nav font-semibold text-lg absolute md:static top-10 left-0 w-full md:w-auto bg-white md:flex md:items-center transition-all duration-300 ease-in ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row md:items-center">
          <li className="p-4 border-b-2 border-yellow-700 border-opacity-0 hover:border-opacity-100 hover:text-yellow-700 duration-200 cursor-pointer">
            <a href="#">Home</a>
          </li>
          <li className="p-4 border-b-2 border-yellow-700 border-opacity-0 hover:border-opacity-100 hover:text-yellow-700 duration-200 cursor-pointer">
            <a href="#">Process</a>
          </li>
          <li className="p-4 border-b-2 border-yellow-700 border-opacity-0 hover:border-opacity-100 hover:text-yellow-700 duration-200 cursor-pointer">
            <a href="#">About</a>
          </li>
          <li className="p-4 border-b-2 border-yellow-700 border-opacity-0 hover:border-opacity-100 hover:text-yellow-700 duration-200 cursor-pointer">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="w-2/12 hidden md:flex justify-end gap-4">
        <a href="#" className="text-2xl hover:text-yellow-700">
          <FaSearch />
        </a>
        <a href="#" className="text-2xl hover:text-yellow-700">
          <FaShoppingCart />
        </a>
      </div>
    </header>
  );
};

export default Navbar;