import React from "react";
import "animate.css";

const AboutUs = () => {
  return (
    <div className="w-11/12 mx-auto mt-10 ">
      {/* Section 1 */}
      <div className="p-8 bg-gradient-to-l from-purple-500 to-indigo-900 text-white rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        <div
          className="w-full md:w-1/2 animate__animated animate__fadeInLeft"
          style={{ animationDuration: "1.5s" }}
        >
          <img
            src="https://i.ibb.co.com/q5cp82L/mathieu-deslauriers-w-Ym-Ihw-YHpm8-unsplash.jpg"
            alt="Visa Documentation"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div
          className="w-full md:w-1/2 pl-0 md:pl-8 mt-6 md:mt-0 animate__animated animate__fadeInRight"
          style={{ animationDuration: "1.5s", animationDelay: "0.5s" }}
        >
          <h2 className="text-4xl font-extrabold text-center md:text-left mb-6">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl leading-8 text-center md:text-left">
            At <span className="font-bold">Visa-Hub</span>, we are dedicated to
            empowering travelers by offering reliable, transparent, and
            efficient visa services. From personalized consultation to
            end-to-end documentation support, we are here to ensure your journey
            starts on the right foot.
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <a
              href="/mission"
              className="btn btn-wide btn-accent text-black font-semibold shadow-lg transform transition hover:scale-105"
            >
              Explore Our Mission
            </a>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="p-8 bg-gradient-to-r from-green-200 to-teal-800 text-white rounded-lg shadow-lg relative overflow-hidden mb-10 my-10">
        <div className="absolute inset-0 bg-opacity-20 bg-[url('https://i.ibb.co.com/S0vYsJQ/j-photos-Cqq-m-GENk-unsplash.jpg')] bg-cover bg-center blur-md"></div>
        <div className="relative z-10">
          <h2
            className="text-4xl font-extrabold text-center mb-6 animate__animated animate__fadeInDown"
            style={{ animationDuration: "1.5s" }}
          >
            Visa-Hub???
          </h2>
          <p
            className="text-lg md:text-xl leading-8 text-center md:text-left animate__animated animate__fadeInUp"
            style={{ animationDuration: "1.5s", animationDelay: "0.5s" }}
          >
            Welcome to <span className="font-bold">Visa-Hub</span>, your trusted
            partner for a seamless visa application process. We aim to simplify
            travel documentation, making international journeys accessible to
            everyone. Let’s unlock the world together!
          </p>
          <div
            className="mt-6 flex justify-center md:justify-start animate__animated animate__pulse"
            style={{
              animationDuration: "1.5s",
              animationIterationCount: "infinite",
            }}
          >
            <a
              href="/about"
              className="btn btn-wide btn-warning text-black font-semibold shadow-lg transform transition hover:scale-105"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
