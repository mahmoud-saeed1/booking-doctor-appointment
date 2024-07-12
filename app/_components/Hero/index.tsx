"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import "./index.css";
import { HeroVariants } from "@/app/_animation";
import { HeroSlidesData } from "@/app/_data";
import { WrapIndex } from "@/app/_utils";
import PaginationControls from "../PaginationControls/PaginationControls";
import HeroImages from "../HeroImages";
import HeroBody from "../HeroBody/HeroBody";

const Hero: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = WrapIndex(0, HeroSlidesData.length, page);

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
        <HeroImages
          HeroSlidesData={HeroSlidesData}
          direction={direction}
          imageIndex={imageIndex}
          key={`image-${page}`}
          page={page}
        />

        <HeroBody
          HeroSlidesData={HeroSlidesData}
          direction={direction}
          imageIndex={imageIndex}
          key={`body-${page}`}
          page={page}
          paginate={paginate}
        />
      </div>
    </section>
  );
};

export default Hero;
