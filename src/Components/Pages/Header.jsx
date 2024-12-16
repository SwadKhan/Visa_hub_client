import React, { useContext } from "react";
import logo from "../../assets/Visa_hub_log.png";
import moment from "moment";
import userIcon from "../../assets/user.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-teal-400 shadow-lg p-6 flex flex-col lg:flex-row justify-between items-center">
      {/* Logo and Title */}
      <div className="flex items-center gap-4">
        <img
          className="w-16 h-16 rounded-lg shadow-lg"
          src={logo}
          alt="Visa Hub Logo"
        />
        <div>
          <h1 className="text-white text-2xl sm:text-3xl font-extrabold animate__animated animate__fadeInLeft">
            VISA HUB
          </h1>
          <p className="text-teal-200 text-sm sm:text-base">
            Explore the World Today!!!
          </p>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="text-center mt-4 lg:mt-0">
        {user && user?.email ? (
          <p className="text-xl sm:text-2xl font-semibold text-yellow-300 animate__animated animate__fadeInRight">
            Welcome, {user.displayName}! Let's Plan Your Journey 🌍
          </p>
        ) : (
          <p className="text-xl sm:text-2xl font-semibold text-white animate__animated animate__fadeInRight">
            Let's Explore the World Together 🌟
          </p>
        )}
      </div>

      {/* User Info and Authentication */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 lg:mt-0">
        {user && user?.email ? (
          <div className="flex items-center gap-2">
            <img
              className="w-14 h-14 rounded-full border-2 border-yellow-300"
              src={user?.photoURL || userIcon}
              alt="User"
            />
            <div className="text-white text-center">
              <p className="text-lg font-medium">{user.displayName}</p>
              <p className="text-sm text-teal-200">{user.email}</p>
            </div>
          </div>
        ) : (
          <img
            className="w-14 h-14 rounded-full border-2 border-gray-300"
            src={userIcon}
            alt="Default User Icon"
          />
        )}

        {/* Auth Buttons */}
        <div className="flex gap-3">
          {user && user?.email ? (
            <button
              onClick={logOut}
              className="btn bg-yellow-300 text-black font-semibold px-4 py-2 rounded-lg hover:scale-105 transition-transform"
            >
              Log Out
            </button>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="btn bg-white text-blue-600 font-medium px-4 py-2 rounded-lg hover:scale-105 transition-transform"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="btn bg-teal-500 text-white font-medium px-4 py-2 rounded-lg hover:scale-105 transition-transform"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
