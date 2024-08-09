"use client";

import { useState, useEffect, useMemo } from "react";
import DoctorCard from "@/app/_components/DoctorCard";
import { DoctorsData } from "@/app/_data";
import { IDoctorData } from "@/app/_interfaces";
import Pagination from "@/app/_components/Pagination";

//? Number of items per page
const ITEMS_PER_PAGE = 6;

interface SearchProps {
  params: { categoryName: string };
}

const Search = ({ params }: SearchProps) => {
  /*~~~~~~~~$ States $~~~~~~~~*/
  const [category, setCategory] = useState(params.categoryName);

  /*~~~~~~~~$ Effects $~~~~~~~~*/
  useEffect(() => {
    setCategory(params.categoryName);
  }, [params.categoryName]);

  /*~~~~~~~~$ Filtered Doctors $~~~~~~~~*/
  const filteredDoctors = useMemo(() => {
    return DoctorsData.filter(
      (doctor: IDoctorData) =>
        doctor.specialty === category || category === "all"
    );
  }, [category]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">Popular Doctors</h1>

      {/*~~~~~~~~$ Doctors List with Pagination $~~~~~~~~*/}
      <Pagination
        data={filteredDoctors}
        component={(doctor: IDoctorData) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        )}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </div>
  );
};

export default Search;
