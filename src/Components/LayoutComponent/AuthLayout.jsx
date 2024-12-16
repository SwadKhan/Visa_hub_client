import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";

const AuthLayout = () => {
  //   const location = useLocation();
  //   const [navbarStyle, setNavbarStyle] = useState("");
  //   useEffect(() => {
  //     if (location.pathname === `/login`) {
  //       setNavbarStyle(
  //         "bg-base-200 shadow-md p-4 flex flex-row justify-center item-center"
  //       );
  //     } else {
  //       setNavbarStyle("bg-base-200 shadow-md p-4 flex flex-row justify-between");
  //     }
  //   }, [location.pathname]);

  return (
    <div className="font-poppins bg-[#F3F3F3]">
      <header className="py-3 w-11/12 mx-auto">
        <Header></Header>
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default AuthLayout;
