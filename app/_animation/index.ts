/*~~~~~~~~$ Hero Animation Variants $~~~~~~~~*/
export const HeroVariants = {
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
