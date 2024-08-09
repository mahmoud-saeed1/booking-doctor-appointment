"use client";

import { useMemo } from "react";
import { DoctorsData } from "@/app/_data";
import DoctorCard from "../DoctorCard";
import Pagination from "../Pagination";
import { IDoctorData } from "@/app/_interfaces";
import EmptyState from "../EmptyState";

/*~~~~~~~~$ Constants $~~~~~~~~*/
const ITEMS_PER_PAGE = 6;

interface DoctorsListProps {
  searchTerm: string;
}

const DoctorsList: React.FC<DoctorsListProps> = ({ searchTerm }) => {
  /*~~~~~~~~$ Handlers $~~~~~~~~*/
  const filteredDoctorsHandler = useMemo<IDoctorData[]>(() => {
    return DoctorsData.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Popular Doctors</h1>

      {/*~~~~~~~~$ Doctors List with Pagination $~~~~~~~~*/}
      {filteredDoctorsHandler.length > 0 ? (
        <Pagination
          data={filteredDoctorsHandler}
          component={(doctor) => <DoctorCard key={doctor.id} doctor={doctor} />}
          itemsPerPage={ITEMS_PER_PAGE}
        />
      ) : (
        <EmptyState
          message="Sorry, we couldn't find any doctors matching your search."
          href="#search__box"
          buttonLabel="Try a different search"
          useLinks
        />
      )}
    </div>
  );
};

export default DoctorsList;
