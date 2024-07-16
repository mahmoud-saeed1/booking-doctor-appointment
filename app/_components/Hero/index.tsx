"use client";
import { useEffect, useState } from "react";
import { HeroSlidesData } from "@/app/_data";
import { WrapIndex } from "@/app/_utils";
import HeroImages from "../HeroImages";
import HeroBody from "../HeroBody/HeroBody";
import "./index.css";

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
    <section className="overflow-hidden container">
      <div className="image__container">
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
