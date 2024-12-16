import React from "react";
import Header from "../Pages/Header";
import Navbar from "../Pages/Navbar";
import Banner from "../Pages/Banner";
import LearnTutorials from "../Pages/LearnTutorials";
import Footer from "../Pages/Footer";
import AboutUs from "../Pages/AboutUs";
import LatestVisa from "../Pages/LatestVisa";

const HomeLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Header></Header>
      </header>
      <section>
        <Navbar></Navbar>
      </section>
      <main>
        <Banner></Banner>
        <LatestVisa></LatestVisa>
        <LearnTutorials></LearnTutorials>
        <AboutUs></AboutUs>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
