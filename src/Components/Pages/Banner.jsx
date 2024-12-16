import React, { useState } from "react";
import "animate.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 0,
      image: "https://i.ibb.co/yY5DFcP/clay-banks-b5-S4-Fr-Jb7y-Q-unsplash.jpg",
      title: "Start Your Visa Journey",
      description: "Explore seamless visa solutions tailored to your needs.",
      link: "/services",
      buttonText: "Explore Services",
      buttonClass: "btn-primary",
    },
    {
      id: 1,
      image: "https://i.ibb.co/x56SsVF/mick-haupt-4-Utuxu-JXkyg-unsplash.jpg",
      title: "Expert Visa Assistance",
      description: "Your trusted partner in travel documentation.",
      link: "/about",
      buttonText: "Learn More",
      buttonClass: "btn-accent",
    },
    {
      id: 2,
      image: "https://i.ibb.co/pWRZqss/arno-ryser-RECOga18s6k-unsplash.jpg",
      title: "Hassle-Free Documentation",
      description: "Streamline your visa application process with us.",
      link: "/guides",
      buttonText: "Get Started",
      buttonClass: "btn-secondary",
    },
    {
      id: 3,
      image:
        "https://i.ibb.co/5TzYvTd/element5-digital-u-E2-T1t-CFsn8-unsplash.jpg",
      title: "Travel with Confidence",
      description: "Achieve your goals with reliable visa support.",
      link: "/contact",
      buttonText: "Contact Us",
      buttonClass: "btn-success",
    },
    {
      id: 4,
      image: "https://i.ibb.co/Z1Xf9Y6/nicolas-cool-Vdwtv-EUj8-HM-unsplash.jpg",
      title: "Achieve Your Dream Destination",
      description: "Begin your journey with Visa-Hub today.",
      link: "/apply",
      buttonText: "Apply Now",
      buttonClass: "btn-warning",
    },
  ];

  const handleSlideChange = (direction) => {
    setActiveSlide((prev) =>
      direction === "next"
        ? (prev + 1) % slides.length
        : (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="carousel w-full relative rounded-xl mt-6 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`carousel-item w-full h-[500px] ${
            activeSlide === index
              ? "block animate__animated animate__fadeIn"
              : "hidden"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute flex flex-col justify-center items-center w-full h-full top-0 bg-black bg-opacity-40 text-white px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {slide.title}
            </h1>
            <p className="text-lg md:text-2xl mb-6">{slide.description}</p>
            <Link
              to={slide.link}
              className={`btn ${slide.buttonClass} btn-wide animate__animated ${
                activeSlide === index ? "animate__bounceInRight" : ""
              }`}
            >
              {slide.buttonText}
            </Link>
          </div>
        </div>
      ))}
      <div className="absolute flex justify-between top-1/2 w-full px-4 -translate-y-1/2">
        <button
          onClick={() => handleSlideChange("prev")}
          className="btn btn-circle"
        >
          ❮
        </button>
        <button
          onClick={() => handleSlideChange("next")}
          className="btn btn-circle"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Banner;
