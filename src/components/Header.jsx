import React from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="bg-[#333333] fixed top-0 left-0 h-20 w-full shadow-md z-50 md:block">
      <div className="flex h-full items-center justify-between max-w-7xl mx-auto px-4 py-3">
        <h2 text-white font-semibold text-center>Microloan</h2>
        
        <div className="flex items-center space-x-4">
        
          <div className="flex items-center">
                      <input
                          
              type="text"
              placeholder="Search..."
              className="px-3 py-2 bg-white border border-gray-600 rounded-l-md focus:outline-none text-sm"
            />
            <button className="px-3 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-500 transition flex items-center justify-center">
              <FaSearch className="h-5 w-5" />
            </button>
          </div>

          
          <div className="text-white text-sm">
            <p>
              You are currently using guest access (
              <Link to="/login" className="text-blue-400 hover:underline">
                Login
              </Link>
              )
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
