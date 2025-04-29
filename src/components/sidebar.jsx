import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaLeaf,
  FaStar,
  FaTrophy,
  FaBookOpen,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = (
    <>
      <h2 className="text-2xl font-bold mb-6">Quiz Categories</h2>
      <ul className="space-y-6 text-xl font-semibold">
        <li>
          <Link to="/quiz/beginner" className="flex items-center space-x-2 hover:text-blue-600">
            <FaLeaf className="text-green-600" />
            <span>Beginner</span>
          </Link>
        </li>
        <li>
          <Link to="/quiz/pro" className="flex items-center space-x-2 hover:text-blue-600">
            <FaStar className="text-yellow-500" />
            <span>Pro</span>
          </Link>
        </li>
        <li>
          <Link to="/quiz/expert" className="flex items-center space-x-2 hover:text-blue-600">
            <FaTrophy className="text-red-500" />
            <span>Expert</span>
          </Link>
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Solutions</h2>
      <ul className="space-y-6 text-xl font-semibold">
        <li>
          <Link to="/solutions/beginner" className="flex items-center space-x-2 hover:text-blue-600">
            <FaBookOpen className="text-purple-500" />
            <span>Beginner Solutions</span>
          </Link>
        </li>
        <li>
          <Link to="/solutions/pro" className="flex items-center space-x-2 hover:text-blue-600">
            <FaBookOpen className="text-purple-500" />
            <span>Pro Solutions</span>
          </Link>
        </li>
        <li>
          <Link to="/solutions/expert" className="flex items-center space-x-2 hover:text-blue-600">
            <FaBookOpen className="text-purple-500" />
            <span>Expert Solutions</span>
          </Link>
        </li>
      </ul>
    </>
  );

  return (
    <>
      {/* Toggle Button (Visible only on mobile) */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-blue-800 text-3xl"
        onClick={() => setIsOpen(true)}
      >
        <FaBars />
      </button>

      {/* Overlay on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-gradient-to-b from-blue-100 via-white to-blue-50 text-[#1E3A8A] p-6 shadow-lg border-r border-blue-200 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static md:h-[calc(100vh-64px)] md:block`}
      >
        {/* Close button for mobile */}
        <div className="md:hidden flex justify-end mb-4">
          <button onClick={() => setIsOpen(false)} className="text-2xl text-blue-800">
            <FaTimes />
          </button>
        </div>

        {menuItems}
      </aside>
    </>
  );
};

export default Sidebar;
