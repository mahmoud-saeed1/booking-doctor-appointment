"use client";

import { DoctorsData } from "@/app/_data";
import DoctorCard from "../DoctorCard";
import Pagination from "../Pagination";

/*~~~~~~~~$ Constants $~~~~~~~~*/
const ITEMS_PER_PAGE = 6;

const DoctorsList = () => {
  /*~~~~~~~~$ Render $~~~~~~~~*/
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Popular Doctors</h1>

      {/*~~~~~~~~$ Doctors List with Pagination $~~~~~~~~*/}
      <Pagination
        data={DoctorsData}
        component={(doctor) => <DoctorCard key={doctor.id} doctor={doctor} />}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </div>
  );
};

export default DoctorsList;
