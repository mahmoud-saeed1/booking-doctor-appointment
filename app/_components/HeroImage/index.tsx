import { imageVariants } from "@/app/_animation";
import { IHeroImageProps } from "@/app/_interfaces";
import { motion } from "framer-motion";
import Image from "next/image";
import "./index.css";

const HeroImage: React.FC<IHeroImageProps> = ({ imageSrc, altText }) => (
  <motion.div
    className="hero-image-container"
    initial="hidden"
    animate="visible"
    exit="hidden"
    variants={imageVariants}
  >
    <Image
      src={imageSrc}
      alt={altText}
      fill
      style={{ objectFit: "cover" }}
      priority
    />
  </motion.div>
);

export default HeroImage;
