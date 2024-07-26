/*~~~~~~~~$ Hero Animation Variants $~~~~~~~~*/
export const contentVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.8 },
  }),
  exit: { opacity: 0, x: 100, transition: { duration: 0.5 } },
};

export const imageVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

/*~~~~~~~~$ Doctor Card $~~~~~~~~*/
export const VDoctorCard = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
