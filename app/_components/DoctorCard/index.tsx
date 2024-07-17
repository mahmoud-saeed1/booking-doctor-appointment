"use client";
import { FC } from "react";
import Image from "next/image";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { IDoctorCard } from "@/app/_interfaces";
import { VDoctorCard } from "@/app/_animation";
import IconContainer from "../IconContainer";
import { Doctor } from "@/app/_icons";
import "./index.css";
import Link from "next/link";

const DoctorCard: FC<IDoctorCard> = ({ doctor }: IDoctorCard) => {
  const { about, name, specialty, image, publishedAt, yearsOfExperience } =
    doctor;
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
            <IconContainer>
              <Doctor />
            </IconContainer>
            <p>{specialty}</p>
          </div>

          <h3>{`Dr. ${name}`}</h3>
          <p>{`${yearsOfExperience} of experience`}</p>
          <p>{about}</p>
        </article>

        {/*~~~~~~~~$ Card Button $~~~~~~~~*/}
        <Link href={"/"} className="card__button">
          book now
        </Link>
      </m.div>
    </LazyMotion>
  );
};

export default DoctorCard;
