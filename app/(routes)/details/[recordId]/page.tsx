"use client";
import { useEffect, useState } from "react";
import { DoctorsData } from "@/app/_data";
import { IDoctorData } from "@/app/_interfaces";
import DoctorImage from "../_components/DoctorImage";
import SuggestedDoctors from "../_components/SuggestedDoctors";
import DoctorBody from "../_components/DoctorBody";
import "./index.css";

const Details = ({ params }: { params: { recordId: string } }) => {
  const [doctorData, setDoctorData] = useState<IDoctorData | null>(null);
  const [suggestedDoctors, setSuggestedDoctors] = useState<IDoctorData[]>([]);

  useEffect(() => {
    const fetchDoctorData = () => {
      const storedDoctorData = sessionStorage.getItem("doctorData");
      const storedSuggestedDoctors = sessionStorage.getItem("suggestedDoctors");

      if (storedDoctorData && storedSuggestedDoctors) {
        try {
          const parsedDoctorData = JSON.parse(storedDoctorData) as IDoctorData;
          const parsedSuggestedDoctors = JSON.parse(storedSuggestedDoctors) as IDoctorData[];

          if (parsedDoctorData.id === params.recordId) {
            setDoctorData(parsedDoctorData);
            setSuggestedDoctors(parsedSuggestedDoctors);
            return;
          }
        } catch (error) {
          console.error("Failed to parse session storage data", error);
        }
      }

      const fetchedDoctorData = DoctorsData.find(
        (doctor: IDoctorData) => doctor.id === params.recordId
      );
      if (fetchedDoctorData) {
        const sameSpecializationDoctors = DoctorsData.filter(
          (doctor: IDoctorData) =>
            doctor.specialty === fetchedDoctorData.specialty &&
            doctor.id !== params.recordId &&
            doctor.image !== fetchedDoctorData.image
        );

        setDoctorData(fetchedDoctorData);
        setSuggestedDoctors(sameSpecializationDoctors);

        sessionStorage.setItem("doctorData", JSON.stringify(fetchedDoctorData));
        sessionStorage.setItem("suggestedDoctors", JSON.stringify(sameSpecializationDoctors));
      } else {
        setDoctorData(null);
        setSuggestedDoctors([]);
      }
    };

    fetchDoctorData();
  }, [params.recordId]);

  return (
    <section className="container">
      {doctorData && (
        <div className="mx-auto ring-2 ring-blue-900 rounded-xl p-6 mb-8 shadow-card-shadow">
          <div className="flex flex-col items-center md:flex-row md:space-x-10">
            <DoctorImage image={doctorData.image} name={doctorData.name} />
            <DoctorBody doctorData={doctorData} />
          </div>
        </div>
      )}
      <SuggestedDoctors suggestedDoctors={suggestedDoctors} />
    </section>
  );
};

export default Details;
