import React, { FC } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { ISocials, ISocialLink } from "../../_interfaces";

const SocialLink: FC<ISocialLink> = ({ href, ariaLabel, Icon }) => (
  <m.li
    whileHover={{ scale: 1.1, y: -7 }}
    whileTap={{ scale: 1.5 }}
    className="w-6 md:w-8"
  >
    <m.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="duration-200 ease-out w-4"
    >
      <Icon className="w-full" />
    </m.a>
  </m.li>
);

const Socials: FC<ISocials> = ({ className, socialLinksData }) => {
  return (
    <LazyMotion features={domAnimation}>
      <ul
        className={`${className} my-4 flex items-center justify-center md:mt-8 md:justify-start gap-6 text-2xl text-dark/90`}
        aria-label="Social media links"
      >
        {socialLinksData.map((social, index) => (
          <SocialLink key={index} {...social} />
        ))}
      </ul>
    </LazyMotion>
  );
};

export default Socials;
