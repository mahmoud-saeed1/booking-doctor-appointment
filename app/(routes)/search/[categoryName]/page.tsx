"use client";

import { useState, useEffect } from "react";
import DoctorCard from "@/app/_components/DoctorCard";
import { DoctorsData } from "@/app/_data";
import { IDoctorData } from "@/app/_interfaces";
import { motion } from "framer-motion";
import Pagination from "@/app/_components/Pagination";

// Number of items per page
const ITEMS_PER_PAGE = 6;

const Search = ({ params }: any) => {
  /*~~~~~~~~$ States $~~~~~~~~*/
  const [category, setCategory] = useState("");

  /*~~~~~~~~$ Effects $~~~~~~~~*/
  useEffect(() => {
    setCategory(params.categoryName);
  }, [params]);

  /*~~~~~~~~$ Filtered Doctors $~~~~~~~~*/
  const filteredDoctors = DoctorsData.filter(
    (doctor: IDoctorData) => doctor.specialty === category || category === "all"
  );

  /*~~~~~~~~$ Render $~~~~~~~~*/
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">popular Doctors</h1>

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
