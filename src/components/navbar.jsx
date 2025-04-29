import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import { logout } from "../firebase";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-100 via-white to-blue-50 shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 border-b border-blue-200">
      {/* Logo or title (optional) */}
      <div className="text-[#1E3A8A] text-xl font-semibold">
        <Link to="/">Quiz App</Link>
      </div>

      {/* Hamburger Icon */}
      <div className="lg:hidden">
        <button
          className="text-[#1E3A8A] text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex space-x-8 text-[#1E3A8A] text-lg font-semibold`}
      >
        <li className="hover:text-blue-700 transition duration-300">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="hover:text-blue-700 transition duration-300">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="hover:text-blue-700 transition duration-300">
          <Link to="/streak">Streak</Link>
        </li>
        <li className="hover:text-blue-700 transition duration-300">
          <Link to="/about-us">About Us</Link>
        </li>
      </ul>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center space-x-2 text-[#1E3A8A] text-lg font-semibold hover:text-red-500 transition duration-300"
      >
        <FaSignOutAlt />
        <span>Logout</span>
      </button>
    </nav>
  );
};

export default Navbar;
