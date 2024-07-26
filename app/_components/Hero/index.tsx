"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import HeroContent from "../HeroContent";
import HeroImage from "../HeroImage";
import HeroNavigation from "../HeroNavigation";
import { HeroSlidesData } from "@/app/_data";
import "./index.css";

const Hero = () => {
  /*~~~~~~~~$ States $~~~~~~~~*/
  const [currentIndex, setCurrentIndex] = useState(0);

  /*~~~~~~~~$ Effects $~~~~~~~~*/
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HeroSlidesData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  /*~~~~~~~~$ Handlers $~~~~~~~~*/
  const handleNextHandler = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % HeroSlidesData.length);
  };

  const handlePrevHandler = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? HeroSlidesData.length - 1 : prevIndex - 1
    );
  };

  /*~~~~~~~~$ Render $~~~~~~~~*/
  const heroSlidesRender = HeroSlidesData.map((slide, index) =>
    index === currentIndex ? (
      <div
        key={slide.id}
        className="slides-container"
      >
        <HeroContent heading={slide.heading} paragraph={slide.paragraph} />
        <HeroImage imageSrc={slide.image} altText={slide.heading} />
      </div>
    ) : null
  );

  return (
    <div className="hero container">
      <AnimatePresence>{heroSlidesRender}</AnimatePresence>

      <HeroNavigation onPrev={handlePrevHandler} onNext={handleNextHandler} />
    </div>
  );
};

export default Hero;
