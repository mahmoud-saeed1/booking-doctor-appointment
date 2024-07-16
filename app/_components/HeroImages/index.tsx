"use client";
import { m, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { HeroVariants } from "@/app/_animation";
import { IHeroImages } from "@/app/_interfaces";
import Image from "next/image";
import "./index.css";

const HeroImages: React.FC<IHeroImages> = ({
  page,
  HeroSlidesData,
  direction,
  imageIndex,
  className,
}) => {
  return (
    <LazyMotion features={domAnimation}>
      <div
        className={`${className} hero__image--outerContainer`}
      >
        <AnimatePresence initial={false} custom={direction}>
          <m.div
            key={page}
            custom={direction}
            variants={HeroVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="hero__image--innerContainer"
          >
            <Image
              alt="slide image"
              src={HeroSlidesData[imageIndex].image}
              width={800}
              height={800}
              className="hero__image"
              priority
            />
          </m.div>
        </AnimatePresence>
      </div>
    </LazyMotion>
  );
};

export default HeroImages;
