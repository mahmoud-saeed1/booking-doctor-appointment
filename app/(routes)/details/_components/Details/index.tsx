"use client";
import { useEffect, useState } from "react";
import { CategoriesIcons, DoctorsData } from "@/app/_data";
import { IDoctorData } from "@/app/_interfaces";

import "./Details.css";
import AppointmentDialog from "../AppointmentDialog";
import DoctorImage from "../DoctorImage";
import DoctorBody from "../DoctorBody";
import SuggestedDoctors from "../SuggestedDoctors";

/*~~~~~~~~$ Details Component $~~~~~~~~*/
const Details = ({ params }: { params: { recordId: string } }) => {
  /*~~~~~~~~$ States $~~~~~~~~*/
  const [doctorData, setDoctorData] = useState<IDoctorData | null>(null);
  const [suggestedDoctors, setSuggestedDoctors] = useState<IDoctorData[]>([]);

  /*~~~~~~~~$ Effects $~~~~~~~~*/
  useEffect(() => {
    const doctorData = DoctorsData.find(
      (doctor: IDoctorData) => doctor.id === params.recordId
    );
    setDoctorData(doctorData || null);

    // Get doctors with the same specialization
    const sameSpecializationDoctors = DoctorsData.filter(
      (doctor: IDoctorData) =>
        doctor.specialty === doctorData?.specialty &&
        doctor.id !== params.recordId
    );
    setSuggestedDoctors(sameSpecializationDoctors);
  }, [params.recordId]);

  const SpecialtyIcon = CategoriesIcons.find(
    (icon) => icon.label === doctorData?.specialty
  )?.icon;

  /*~~~~~~~~$ Render $~~~~~~~~*/
  return (
    <section className="details container">
      {/*~~~~~~~~$ Doctor Data $~~~~~~~~*/}
      {doctorData && (
        <div className="details__doctor-data">
          <div className="details__content">
            <DoctorImage image={doctorData.image} name={doctorData.name} />
            <DoctorBody doctorData={doctorData} />
            <AppointmentDialog doctorID={doctorData.id} />
          </div>
        </div>
      )}

      {/*~~~~~~~~$ Suggested Doctors Carousel $~~~~~~~~*/}
      <SuggestedDoctors suggestedDoctors={suggestedDoctors} />
    </section>
  );
};

export default Details;
