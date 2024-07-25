// DoctorCard.tsx
"use client";
import { FC } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { IDoctorCard } from "@/app/_interfaces";
import { VDoctorCard } from "@/app/_animation";
import DoctorCardImage from "../DoctorCardImage";
import DoctorCardContent from "../DoctorCardContent";
import DoctorCardFooter from "../DoctorCardFooter";
import "./index.css";

const DoctorCard: FC<IDoctorCard> = ({ doctor }) => {
  const { image, name } = doctor;

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="doctor__card shadow-card-shadow"
        variants={VDoctorCard}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <DoctorCardImage image={image} name={name} />
        <DoctorCardContent doctor={doctor} />
        <DoctorCardFooter doctorID={doctor.id}/>
      </m.div>
    </LazyMotion>
  );
};

export default DoctorCard;
