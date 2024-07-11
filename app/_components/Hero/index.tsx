"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import "./index.css";

// Array of slide data
const SlidesData = [
  {
    id: "1",
    image: "/doctors.webp",
    heading: "Find and Book Your Appointments with Ease",
    paragraph:
      "Our platform provides a seamless way to find and book appointments with healthcare professionals. Whether you need a general check-up or a specialist consultation, we have got you covered with just a few clicks.",
  },
  {
    id: "2",
    image: "/doctors.webp",
    heading: "Your Health, Our Priority",
    paragraph:
      "We prioritize your health and well-being by connecting you with experienced doctors and specialists. Our commitment is to ensure you receive the best possible care at your convenience.",
  },
  {
    id: "3",
    image: "/doctors.webp",
    heading: "Quality Care for Everyone",
    paragraph:
      "We believe in providing quality healthcare for everyone. Our services are designed to be accessible and affordable, ensuring that you get the care you deserve, regardless of your circumstances.",
  },
];

// Animation variants for images and text
const variants = {
  enter: {
    opacity: 0,
    x: -100,
  },
  center: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

// Utility function to wrap the index
const wrapIndex = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

const Hero: React.FC = () => {
  const [[page, direction], setPage] = React.useState([0, 0]);

  // Get the current image index
  const imageIndex = wrapIndex(0, SlidesData.length, page);

  // Function to handle pagination
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(interval);
  }, [page]);

  return (
    <section className="overflow-hidden">
      <div className="grid grid-cols-2 gap-8 px-4 py-8 overflow-hidden sm:px-6 sm:py-12 lg:py-16">
        {/*~~~~~~~~$ Hero Image $~~~~~~~~*/}
        <AnimatePresence initial={false} custom={direction}>
          <div className="overflow-hidden h-80 col-span-2 rounded-lg sm:h-96 lg:col-span-1 lg:order-last lg:h-full">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative h-80 col-span-2 rounded-lg sm:h-96 lg:col-span-1 lg:order-last lg:h-full"
            >
              <Image
                alt="slide image"
                src={SlidesData[imageIndex].image}
                width={800}
                height={800}
                className="h-full w-full rounded-3xl object-cover"
                priority
              />
            </motion.div>
          </div>
        </AnimatePresence>

        {/*~~~~~~~~$ Hero Body $~~~~~~~~*/}
        <AnimatePresence initial={false} custom={direction}>
          <div className="p-0 col-span-2 overflow-hidden lg:col-span-1 lg:py-24">
            <motion.div
              key={page + "heading"}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col space-y-8 text-center lg:text-start"
            >
              {/*~~~~~~~~$ Body Headding $~~~~~~~~*/}
              <h2 className="text-3xl font-bold sm:text-4xl uppercase overflow-hidden">
                {SlidesData[imageIndex].heading}
              </h2>

              {/*~~~~~~~~$ Body Paragraph $~~~~~~~~*/}
              <p className="mt-4 text-lg text-gray-600">
                {SlidesData[imageIndex].paragraph}
              </p>

              {/*~~~~~~~~$ Body Button $~~~~~~~~*/}
              <Button className="overflow-hidden">Explore More</Button>
            </motion.div>

            {/*~~~~~~~~$ Pagination Controls $~~~~~~~~*/}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4 hidden">
              <Button onClick={() => paginate(-1)}>←</Button>
              <Button onClick={() => paginate(1)}>→</Button>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
