import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "animate.css";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-teal-400 shadow-lg p-6 flex flex-col lg:flex-row justify-between items-center gap-4">
      {/* Logo and Brand Name */}
      <div className="text-3xl font-extrabold text-white animate__animated animate__fadeInLeft">
        Let's Explore!!!
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap gap-6 text-lg sm:text-xl font-medium text-white">
        <Link
          to="/"
          className="hover:text-yellow-300 transition-transform duration-300 transform hover:scale-110"
        >
          Home
        </Link>
        <Link
          to="/allVisa"
          className="hover:text-yellow-300 transition-transform duration-300 transform hover:scale-110"
        >
          All Visas
        </Link>
        {user && user?.email && (
          <Link
            to="/myAddedVisa"
            className="hover:text-yellow-300 transition-transform duration-300 transform hover:scale-110"
          >
            My Added Visa
          </Link>
        )}
        {/* Add Visa */}
        {user && user?.email && (
          <Link
            to="/addVisa"
            className="hover:text-yellow-300 transition-transform duration-300 transform hover:scale-110"
          >
            Add Visa
          </Link>
        )}
        {user && user?.email && (
          <Link
            to="/appliedVisa"
            className="hover:text-yellow-300 transition-transform duration-300 transform hover:scale-110"
          >
            My Applications
          </Link>
        )}
      </div>

      {/* Action Button */}
      <div className="hidden lg:block">
        <Link
          to="/contact"
          className="btn btn-warning text-black font-semibold shadow-md px-6 py-2 transform transition hover:scale-105 animate__animated animate__pulse"
          style={{
            animationDuration: "1.5s",
            animationIterationCount: "infinite",
          }}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
