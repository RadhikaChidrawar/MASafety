import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { setSearchTerm } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLogin } from "react-icons/ai";  // Sign In Icon
import { BiShoppingBag } from "react-icons/bi";
import { IoHome, IoLogInSharp } from "react-icons/io5";

import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaSearch,
} from "react-icons/fa";
import { RiPagesLine, RiTeamFill } from "react-icons/ri";
import { MdContactMail, MdMiscellaneousServices } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { CiShop } from "react-icons/ci";
import { FaCartShopping, FaShop } from "react-icons/fa6";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);
  const [searchVisible, setSearchVisible] = useState(false);

  const products = useSelector((state) => state.cart.products);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleSubmenu = (menu) => {
    setSubmenuOpen((prev) => (prev === menu ? null : menu));
  };

  // Close submenus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".menu-container")) {
        setSubmenuOpen(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      dispatch(setSearchTerm(search)); 
      navigate("/filter-data");
      setSearchVisible(false);
    }
  };

  return (
    <header className="bg-blue-900 text-white px-4 py-3 md:p-5 flex flex-wrap items-center justify-between shadow-lg relative z-50 menu-container">
      <div className="flex items-center justify-between w-full md:w-auto">
        {/* Logo */}
        <Link to="/" className="mr-4 md:mr-6 flex-shrink-0">
          <img
            src={logo}
            alt="Logo"
            className="h-10 md:h-12 transition-transform transform hover:scale-110"
          />
        </Link>

        <div className="flex items-center md:hidden">
          {/* Mobile Search Toggle Button */}
          <button
            className="text-white text-xl mr-3"
            onClick={() => setSearchVisible(!searchVisible)}
          >
            <FaSearch />
          </button>
          
          {/* Mobile Menu Toggle Button */}
          <button
            className="text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar - Conditional Display */}
      {searchVisible && (
        <div className="w-full mt-3 md:hidden">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 rounded-full border-none shadow-md focus:ring-2 focus:ring-orange-500 focus:outline-none text-black text-sm"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button type="submit" className="absolute right-3 top-2.5 text-gray-600">
              <FaSearch className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-3 lg:space-x-6 text-sm lg:text-lg font-semibold relative z-50">
        <Link to="/" className="hover:text-orange-400 transition-all duration-300">
          Home
        </Link>
        <Link to="/services" className="hover:text-orange-400 transition-all duration-300">
          Services
        </Link>
        <Link to="/shop" className="hover:text-orange-400 transition-all duration-300">
          Shop
        </Link>
        <Link to="/contact" className="hover:text-orange-400 transition-all duration-300">
          Contact
        </Link>
      </nav>

      {/* Desktop Search Bar */}
      <div className="hidden md:flex justify-center flex-grow mx-4">
        <form onSubmit={handleSearch} className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 rounded-full border-none shadow-md focus:ring-2 focus:ring-orange-500 focus:outline-none text-black"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button type="submit" className="absolute right-3 top-2.5 text-gray-600">
            <FaSearch className="w-5 h-5" />
          </button>
        </form>
      </div>

      {/* Sign In and Buy Now Buttons - Desktop */}
      <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
        <Link to="/signin" className="flex items-center gap-1 bg-orange-500 px-2 py-1 lg:px-3 lg:py-1 rounded-full text-xs font-semibold shadow-lg hover:bg-orange-600 hover:scale-110 transition-transform duration-300">
          <AiOutlineLogin className="text-white text-base" />
          <span className="text-white">Sign In</span>
        </Link>

        <Link to="/buynow" className="flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 px-2 py-1 lg:px-3 lg:py-1 rounded-full text-xs font-semibold shadow-lg hover:scale-110 transition-transform duration-300">
          <BiShoppingBag className="text-white text-base" />
          <span className="text-white">Buy Now</span>
        </Link>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-900 shadow-lg transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}
      >
        <div className="flex justify-between items-center p-4 border-b border-blue-800">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Logo" className="h-10" />
          </Link>
          <button
            className="text-white text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        <div className="p-4">
          <form onSubmit={handleSearch} className="relative mb-6">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 rounded-full border-none shadow-md focus:ring-2 focus:ring-orange-500 focus:outline-none text-black text-sm"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button type="submit" className="absolute right-3 top-2 text-gray-600">
              <FaSearch className="w-4 h-4" />
            </button>
          </form>
        </div>

        <nav className="flex flex-col space-y-2 text-base px-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-white hover:text-orange-400 transition-all duration-300 py-2"
            onClick={() => setMenuOpen(false)}
          >
            <IoHome /> Home
          </Link>
          <Link
            to="/services"
            className="flex items-center gap-2 text-white hover:text-orange-400 transition-all duration-300 py-2"
            onClick={() => setMenuOpen(false)}
          >
            <MdMiscellaneousServices /> Services
          </Link>
          <Link
            to="/shop"
            className="flex items-center gap-2 text-white hover:text-orange-400 transition-all duration-300 py-2"
            onClick={() => setMenuOpen(false)}
          >
            <FaShop /> Shop
          </Link>
          {/* <Link
            to="/profile"
            className="flex items-center gap-2 text-white hover:text-orange-400 transition-all duration-300 py-2"
            onClick={() => setMenuOpen(false)}
          >
            <IoPersonCircleSharp />Profile
          </Link> */}
          <Link
            to="/contact"
            className="flex items-center gap-2 text-white hover:text-orange-400 transition-all duration-300 py-2"
            onClick={() => setMenuOpen(false)}
          >
            <MdContactMail /> Contact
          </Link>
          <div className="border-t border-blue-800 my-2 pt-2">
            <Link
              to="/signin"
              className="flex items-center gap-2 text-white hover:text-orange-400 transition-all duration-300 py-2"
              onClick={() => setMenuOpen(false)}
            >
              <IoLogInSharp /> Sign In
            </Link>
            <Link
              to="/buynow"
              className="flex items-center gap-2 text-white hover:text-orange-400 transition-all duration-300 py-2"
              onClick={() => setMenuOpen(false)}
            >
              <FaCartShopping /> Buy Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}