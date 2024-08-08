import { motion } from "framer-motion";
import { IHeroContentProps } from "@/app/_interfaces";
import { contentVariants } from "@/app/_animation";
import LinkButton from "../ui/LinkButton";
import "./index.css";

const HeroContent: React.FC<IHeroContentProps> = ({ heading, paragraph }) => {
  /*~~~~~~~~$ Render $~~~~~~~~*/
  const headerRender = heading.split(" ").map((word, i) => (
    <motion.span
      key={i}
      className="text-blue-700"
      custom={i}
      variants={contentVariants}
    >
      {word}{" "}
    </motion.span>
  ));

  return (
    <div className="hero-content-container">
      <motion.div
        className="hero-text"
        initial="hidden"
        animate="visible"
        exit="exit"
        custom={0}
        variants={contentVariants}
      >
        <h1 className="hero-title">{headerRender}</h1>
        <motion.p
          className="hero-paragraph"
          custom={1}
          variants={contentVariants}
        >
          {paragraph}
        </motion.p>
        <motion.div custom={2} variants={contentVariants}>
          <LinkButton
            path="/search/dentist"
            label="find a doctor"
            className="md:mt-8"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroContent;
