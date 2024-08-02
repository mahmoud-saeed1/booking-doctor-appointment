"use client";
import { useEffect, useState } from "react";
import { DoctorsData } from "@/app/_data";
import { IDoctorData } from "@/app/_interfaces";
import DoctorImage from "../_components/DoctorImage";
import SuggestedDoctors from "../_components/SuggestedDoctors";
import DoctorBody from "../_components/DoctorBody";
import "./index.css";

/*~~~~~~~~$ Details Component $~~~~~~~~*/
const Details = ({ params }: { params: { recordId: string } }) => {
  /*~~~~~~~~$ States $~~~~~~~~*/
  const [doctorData, setDoctorData] = useState<IDoctorData | null>(null);
  const [suggestedDoctors, setSuggestedDoctors] = useState<IDoctorData[]>([]);

  /*~~~~~~~~$ Effects $~~~~~~~~*/
  useEffect(() => {
    // Check session storage for doctor data
    const storedDoctorData = sessionStorage.getItem('doctorData');
    const storedSuggestedDoctors = sessionStorage.getItem('suggestedDoctors');

    if (storedDoctorData && storedSuggestedDoctors) {
      try {
        const parsedDoctorData = JSON.parse(storedDoctorData) as IDoctorData;
        const parsedSuggestedDoctors = JSON.parse(storedSuggestedDoctors) as IDoctorData[];

        // Verify that parsedDoctorData corresponds to the current recordId
        if (parsedDoctorData.id === params.recordId) {
          setDoctorData(parsedDoctorData);
          setSuggestedDoctors(parsedSuggestedDoctors);
          return; // Exit early if data is valid
        }
      } catch (error) {
        console.error("Failed to parse session storage data", error);
      }
    }

    // Fetch data if not found in session storage or invalid
    const fetchedDoctorData = DoctorsData.find(
      (doctor: IDoctorData) => doctor.id === params.recordId
    );
    setDoctorData(fetchedDoctorData || null);

    // Get doctors with the same specialization
    const sameSpecializationDoctors = DoctorsData.filter(
      (doctor: IDoctorData) =>
        doctor.specialty === fetchedDoctorData?.specialty &&
        doctor.id !== params.recordId &&
        doctor.image !== fetchedDoctorData?.image
    );
    setSuggestedDoctors(sameSpecializationDoctors);

    // Save data to session storage
    if (fetchedDoctorData) {
      sessionStorage.setItem('doctorData', JSON.stringify(fetchedDoctorData));
    }
    sessionStorage.setItem('suggestedDoctors', JSON.stringify(sameSpecializationDoctors));

  }, [params.recordId]);

  /*~~~~~~~~$ Render $~~~~~~~~*/
  return (
    <section className="container">
      {/*~~~~~~~~$ Doctor Data $~~~~~~~~*/}
      {doctorData && (
        <div className="mx-auto ring-2 ring-blue-900 rounded-xl p-6 mb-8 shadow-card-shadow">
          <div className="flex flex-col items-center md:flex-row md:space-x-10">
            {/*~~~~~~~~$ Image $~~~~~~~~*/}
            <DoctorImage image={doctorData.image} name={doctorData.name} />

            {/*~~~~~~~~$ Body $~~~~~~~~*/}
            <DoctorBody doctorData={doctorData} />
          </div>
        </div>
      )}

      {/*~~~~~~~~$ Suggested Doctors Carousel $~~~~~~~~*/}
      <SuggestedDoctors suggestedDoctors={suggestedDoctors} />
    </section>
  );
};

export default Details;
