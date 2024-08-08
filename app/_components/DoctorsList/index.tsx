"use client";

import { useMemo } from "react";
import { DoctorsData } from "@/app/_data";
import DoctorCard from "../DoctorCard";
import Pagination from "../Pagination";
import { IDoctorData } from "@/app/_interfaces";

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
        <div className="flex justify-center items-center h-64">
          <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md w-full">
            <div className="bg-gradient-to-r from-primary to-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Oops!</h2>
            <p className="text-gray-600 mb-6">
              Sorry, we couldn't find any doctors matching your search.
            </p>
            <a href="#search__box" className="bg-gradient-to-r from-primary to-blue-900 hover:from-indigo-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition-all duration-700 ease-in-out ">
              Try a different search
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorsList;