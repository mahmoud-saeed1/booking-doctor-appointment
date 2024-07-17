"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { IDoctorCard } from "@/app/_interfaces";
import { VDoctorCard } from "@/app/_animation";
import IconContainer from "../IconContainer";
import { Doctor } from "@/app/_icons";
import Link from "next/link";
import { sliceText } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import "./index.css";

const DoctorCard: FC<IDoctorCard> = ({ doctor }) => {
  const { about, name, specialty, image, yearsOfExperience } = doctor;

  /*~~~~~~~~$ States $~~~~~~~~*/
  const [isExpanded, setIsExpanded] = useState(false);

  /*~~~~~~~~$ Handlers $~~~~~~~~*/
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="doctor__card shadow-card-shadow"
        variants={VDoctorCard}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/*~~~~~~~~$ Card Image $~~~~~~~~*/}
        <div className="image__container--outer">
          <div className="image__container--inner">
            <Image
              src={image}
              alt={name}
              width={384}
              height={216}
              className="doctor__image"
            />
          </div>
        </div>

        {/*~~~~~~~~$ Card content $~~~~~~~~*/}
        <article className="card__content">
          <div className="specialty-box">
            <IconContainer className="icon__container">
              <Doctor />
            </IconContainer>
            <p>{specialty}</p>
          </div>

          <h3>{`Dr. ${name}`}</h3>
          <p>{`${yearsOfExperience} years of experience`}</p>
          <p>
            {isExpanded ? about : sliceText(about, 50)}
            {about.length > 50 && (
              <Button onClick={handleToggle} className="more__button">
                {isExpanded ? " show less" : "...show more"}
              </Button>
            )}
          </p>
        </article>

        {/*~~~~~~~~$ Card Button $~~~~~~~~*/}
        <Link href="/" className="card__button">
          book now
        </Link>
      </m.div>
    </LazyMotion>
  );
};

export default DoctorCard;
