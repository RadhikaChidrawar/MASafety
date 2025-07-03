import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { setSearchTerm } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLogin } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { IoHome, IoLogInSharp } from "react-icons/io5";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { MdContactMail, MdMiscellaneousServices } from "react-icons/md";
import { FaCartShopping, FaShop } from "react-icons/fa6";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { FaBoxOpen } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  const products = useSelector((state) => state.cart.products);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Load user from localStorage on first render
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      dispatch(setSearchTerm(search));
      navigate("/filter-data");
      setSearchVisible(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setDropdownOpen(false);
    navigate("/");
  };

  return (
    <header className="bg-blue-900 text-white px-4 py-3 md:p-5 flex flex-wrap items-center justify-between shadow-lg relative z-50 menu-container">
      {/* Logo + Mobile Buttons */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to="/" className="mr-4 md:mr-6 flex-shrink-0">
          <img src={logo} alt="Logo" className="h-10 md:h-12 hover:scale-110" />
        </Link>

        <div className="flex items-center md:hidden">
          <button
            className="text-white text-xl mr-3"
            onClick={() => setSearchVisible(!searchVisible)}
          >
            <FaSearch />
          </button>
          <button
            className="text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      {searchVisible && (
        <div className="w-full mt-3 md:hidden">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 rounded-full text-black text-sm"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button
              type="submit"
              className="absolute right-3 top-2.5 text-gray-600"
            >
              <FaSearch className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-3 lg:space-x-6 text-sm lg:text-lg font-semibold">
        <Link to="/" className="hover:text-orange-400">
          Home
        </Link>
        <Link to="/services" className="hover:text-orange-400">
          Services
        </Link>
        <Link to="/shop" className="hover:text-orange-400">
          Shop
        </Link>
        <Link to="/contact" className="hover:text-orange-400">
          Contact
        </Link>
      </nav>

      {/* Desktop Search */}
      <div className="hidden md:flex justify-center flex-grow mx-4">
        <form onSubmit={handleSearch} className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 rounded-full text-black"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button
            type="submit"
            className="absolute right-3 top-2.5 text-gray-600"
          >
            <FaSearch className="w-5 h-5" />
          </button>
        </form>
      </div>

      {/* Right Side Desktop */}
      <div className="hidden md:flex items-center justify-end space-x-2 lg:space-x-3 w-full max-w-[350px]">
        <Link
          to="/buynow"
          className="relative bg-white text-blue-900 p-2 rounded-full hover:bg-gray-100 transition"
          title="Cart"
        >
          <FaCartShopping className="text-xl" />
          {products?.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1 rounded-full">
              {products.length}
            </span>
          )}
        </Link>

        {!user ? (
          <>
            <Link
              to="/signin"
              className="bg-orange-500 px-3 py-1.5 rounded-full text-[12px] lg:text-sm font-medium hover:bg-orange-600 transition-all flex items-center gap-1"
            >
              <AiOutlineLogin className="text-base" />
              <span>Sign In</span>
            </Link>
          </>
        ) : (
          <div
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            className="relative"
          >
            <img
              src={user.profilePic || "https://via.placeholder.com/40"}
              alt="Profile"
              className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white object-cover cursor-pointer hover:scale-105 transition-transform"
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-xl shadow-2xl py-2 z-50 animate-fadeIn space-y-1 border border-gray-200">
                <Link
                  to="/porfile"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  <RiContactsFill className="text-base" /> Profile
                </Link>
                <Link
                  to="/Myorder"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  <FaBoxOpen className="text-base" /> Order History
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  <FaArrowRightFromBracket className="text-base" /> Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-900 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
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
              className="w-full px-4 py-2 rounded-full text-black text-sm"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button
              type="submit"
              className="absolute right-3 top-2 text-gray-600"
            >
              <FaSearch className="w-4 h-4" />
            </button>
          </form>

          <nav className="flex flex-col space-y-2 text-base">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-white py-2 flex items-center gap-2 hover:text-orange-400"
            >
              <IoHome /> Home
            </Link>
            <Link
              to="/services"
              onClick={() => setMenuOpen(false)}
              className="text-white py-2 flex items-center gap-2 hover:text-orange-400"
            >
              <MdMiscellaneousServices /> Services
            </Link>
            <Link
              to="/shop"
              onClick={() => setMenuOpen(false)}
              className="text-white py-2 flex items-center gap-2 hover:text-orange-400"
            >
              <FaShop /> Shop
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-white py-2 flex items-center gap-2 hover:text-orange-400"
            >
              <MdContactMail /> Contact
            </Link>

            <div className="mt-4 pt-2 border-t border-blue-800">
              {!user ? (
                <>
                  <Link
                    to="/signin"
                    onClick={() => setMenuOpen(false)}
                    className="text-white py-2 flex items-center gap-2 hover:text-orange-400"
                  >
                    <IoLogInSharp /> Sign In
                  </Link>
                  <Link
                    to="/buynow"
                    onClick={() => setMenuOpen(false)}
                    className="text-white py-2 flex items-center gap-2 hover:text-orange-400"
                  >
                    <FaCartShopping /> Buy Now
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/porfile"
                    onClick={() => setMenuOpen(false)}
                    className="text-white py-2 flex items-center gap-2 hover:text-orange-400"
                  >
                    <RiContactsFill /> Profile
                  </Link>
                  <Link
                    to="/Myorder"
                    onClick={() => setMenuOpen(false)}
                    className="text-white py-2 flex items-center gap-2 hover:text-orange-400"
                  >
                    <FaBoxOpen /> Order History
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-white py-2 w-full text-left flex items-center gap-2 hover:text-orange-400"
                  >
                    <FaArrowRightFromBracket /> Logout
                  </button>
                </>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
