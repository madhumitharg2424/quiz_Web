import React from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaStar, FaTrophy, FaBookOpen } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-72 bg-gradient-to-b from-blue-100 via-white to-blue-50 text-[#1E3A8A] fixed left-0 top-16 h-[calc(100vh-64px)] p-6 shadow-lg overflow-y-auto z-10 border-r border-blue-200">
      <h2 className="text-2xl font-bold mb-6">Quiz Categories</h2>

      <ul className="space-y-6 text-xl font-semibold">
        <li className="transition duration-300 hover:text-blue-600">
          <Link to="/quiz/beginner" className="flex items-center space-x-2">
            <FaLeaf className="text-green-600" />
            <span>Beginner</span>
          </Link>
        </li>
        <li className="transition duration-300 hover:text-blue-600">
          <Link to="/quiz/pro" className="flex items-center space-x-2">
            <FaStar className="text-yellow-500" />
            <span>Pro</span>
          </Link>
        </li>
        <li className="transition duration-300 hover:text-blue-600">
          <Link to="/quiz/expert" className="flex items-center space-x-2">
            <FaTrophy className="text-red-500" />
            <span>Expert</span>
          </Link>
        </li>
      </ul>

      {/* Solutions Section */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Solutions</h2>

      <ul className="space-y-6 text-xl font-semibold">
        <li className="transition duration-300 hover:text-blue-600">
          <Link to="/solutions/beginner" className="flex items-center space-x-2">
            <FaBookOpen className="text-purple-500" />
            <span>Beginner Solutions</span>
          </Link>
        </li>
        <li className="transition duration-300 hover:text-blue-600">
          <Link to="/solutions/pro" className="flex items-center space-x-2">
            <FaBookOpen className="text-purple-500" />
            <span>Pro Solutions</span>
          </Link>
        </li>
        <li className="transition duration-300 hover:text-blue-600">
          <Link to="/solutions/expert" className="flex items-center space-x-2">
            <FaBookOpen className="text-purple-500" />
            <span>Expert Solutions</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
