import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="mx-11/12 mx-auto">
      <Navbar></Navbar>
      <div className="flex flex-row border bg-orange-100 p-10 rounded-lg items-center justify-center gap-6">
        <img
          className="w-60 h-60 rounded-full mt-2"
          src={user?.photoURL}
          alt=""
        />
        <div className="flex flex-col text-2xl font-semibold text-gray-950 gap-4">
          <p>Name : {user.displayName}</p>
          <p>Email : {user.email}</p>
          <Link
            to="/updateProfile"
            className="btn  text-2xl bg-green-500 text-black hover:text-primary"
          >
            Update
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyProfile;
