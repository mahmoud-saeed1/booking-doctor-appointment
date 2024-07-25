import React, { FC } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { FaceBook, TikTok, WhatsApp, Gmail, Instagram } from "../../_icons";
import { ISocials } from "../../_interfaces";

const Socials = ({ className, socialLinks }: ISocials) => {
  return (
    <LazyMotion features={domAnimation}>
      <ul
        className={`${className} my-4 flex items-center justify-center md:mt-8 md:justify-start gap-6 text-2xl text-dark/90`}
        aria-label="Social media links"
      >
        {/* Facebook */}
        <m.li
          whileHover={{ scale: 1.1, y: -7 }}
          whileTap={{ scale: 1.5 }}
          className="w-6 md:w-8"
        >
          <m.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="duration-200 ease-out w-4"
          >
            <FaceBook className="w-full" />
          </m.a>
        </m.li>

        {/* Instagram */}
        <m.li
          whileHover={{ scale: 1.1, y: -7 }}
          whileTap={{ scale: 1.5 }}
          className="w-6 md:w-8"
        >
          <m.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="duration-200 ease-out w-4"
          >
            <Instagram className="w-full" />
          </m.a>
        </m.li>

        {/* TikTok */}
        <m.li
          whileHover={{ scale: 1.1, y: -7 }}
          whileTap={{ scale: 1.5 }}
          className="w-6 md:w-8"
        >
          <m.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="duration-200 ease-out w-4"
          >
            <TikTok className="w-full" />
          </m.a>
        </m.li>

        {/* Whatsapp */}
        <m.li
          whileHover={{ scale: 1.1, y: -7 }}
          whileTap={{ scale: 1.5 }}
          className="w-6 md:w-8"
        >
          <m.a
            href="https://wa.me/+2010"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="duration-200 ease-out w-4"
          >
            <WhatsApp className="w-full" />
          </m.a>
        </m.li>

        {/* Gmail */}
        <m.li
          whileHover={{ scale: 1.1, y: -7 }}
          whileTap={{ scale: 1.5 }}
          className="w-6 md:w-8"
        >
          <m.a
            href="mailto:cocos110223@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gmail"
            className="duration-200 ease-out w-4"
          >
            <Gmail className="w-full" />
          </m.a>
        </m.li>
      </ul>
    </LazyMotion>
  );
};

export default Socials;
