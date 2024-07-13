"use client";
import "./index.css";
import { m, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { HeroVariants } from "@/app/_animation";
import { IHeroBody } from "@/app/_interfaces";
import { Button } from "@/components/ui/button";
import PaginationControls from "../PaginationControls/PaginationControls";

const HeroBody: React.FC<IHeroBody> = ({
  page,
  HeroSlidesData,
  direction,
  imageIndex,
  paginate,
  className,
}) => {
  return (
    <LazyMotion features={domAnimation}>
      <div className={`${className} hero__body`}>
        <AnimatePresence initial={false} custom={direction}>
          <m.div
            key={page}
            custom={direction}
            variants={HeroVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="hero__info"
          >
            <h2 className="hero__headding">
              {HeroSlidesData[imageIndex].headding}
            </h2>
            <p className="hero__paragraph">
              {HeroSlidesData[imageIndex].paragraph}
            </p>
            <Button className="overflow-hidden">Explore More</Button>
          </m.div>
        </AnimatePresence>

        <PaginationControls
          paginate={paginate}
          className="hero__pagination--controls hidden"
        />
      </div>
    </LazyMotion>
  );
};

export default HeroBody;
