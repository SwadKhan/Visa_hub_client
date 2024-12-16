import React from "react";
import { Link } from "react-router-dom";
import "animate.css";

const Tutorial = () => {
  return (
    <div className="relative w-11/12 mx-auto my-10 p-8 bg-gradient-to-r from-teal-600 to-blue-800 text-white rounded-lg shadow-lg">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('https://i.ibb.co/Z1Xf9Y6/nicolas-cool-Vdwtv-EUj8-HM-unsplash.jpg')] bg-cover bg-center opacity-30 blur-sm"></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Title with animation */}
        <h2
          className="text-4xl font-extrabold mb-6 animate__animated animate__fadeInDown"
          style={{ animationDuration: "1.5s" }}
        >
          Learn the Visa Application Process
        </h2>

        {/* YouTube Video Embed */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3SsK-cxlj_w?si=t6b7CfvB1jPbAcOp"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-lg shadow-lg animate__animated animate__fadeInUp"
          style={{ animationDuration: "1.5s", animationDelay: "0.5s" }}
        ></iframe>

        {/* Button with animation */}
        <Link
          to="/tutorials"
          className="btn btn-wide bg-yellow-500 text-black font-semibold mt-6 shadow-lg transform transition hover:scale-105 animate__animated animate__pulse"
          style={{
            animationDuration: "1.5s",
            animationIterationCount: "infinite",
          }}
        >
          Explore More Tutorials
        </Link>
      </div>
    </div>
  );
};

export default Tutorial;
