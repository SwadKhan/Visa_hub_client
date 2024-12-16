import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 text-gray-800 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-center max-w-2xl mb-6">
        Hello, I am Swad, a passionate learner and enthusiast of modern
        technology and education. I believe in the power of knowledge and
        collaboration to create a better, more connected world. Join me in this
        exciting journey of exploration and growth!
      </p>
      <Link
        to="/"
        className="btn bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default About;
