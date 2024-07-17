/*~~~~~~~~$ Hero Animation Variants $~~~~~~~~*/
export const VHeroVariants = {
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

/*~~~~~~~~$ Doctor Card $~~~~~~~~*/
export const VDoctorCard = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
