import React from "react";
import ContactInfo from "../ContactInfo";
import AppointmentDialog from "../AppointmentDialog";
import Socials from "@/app/_components/Socials";
import { IDoctorData } from "@/app/_interfaces";
import SpecialtyBox from "@/app/_components/SpecialtyBox";
import "./index.css";
import { SocialLinksData } from "@/app/_data";

interface IDoctorBodyProps {
  doctorData: IDoctorData;
}

const DoctorBody = ({ doctorData }: IDoctorBodyProps) => {
  return (
    <div className="doctor-body">
      {/* Specialty Box */}
      <SpecialtyBox
        doctorSpecialty={doctorData.specialty}
        className="md:justify-start"
      />
      {/* Doctor's Name */}
      <h2 className="doctor-body__name">{`Dr. ${doctorData.name}`}</h2>
      {/* About Doctor */}
      <p className="doctor-body__about">{doctorData.about}</p>
      {/* Contact Info */}
      <ContactInfo doctorData={doctorData} />
      {/* Social Links */}
      <Socials socialLinksData={SocialLinksData} />
      {/* Appointment Dialog */}
      <AppointmentDialog doctorID={doctorData.id} />
    </div>
  );
};

export default DoctorBody;
