"use client";
import Hero from "./_components/Hero";
import GategorySearch from "./_components/GategorySearch";
import DoctorsList from "./_components/DoctorsList";
import { useState } from "react";

const page = () => {
  /*~~~~~~~~$ States $~~~~~~~~*/
  const [searchTerm, setSearchTerm] = useState<string>("");

  /*~~~~~~~~$ Handlers $~~~~~~~~*/
  const setSearchTermHandler = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  return (
    <main>
      <Hero />
      <GategorySearch
        searchTerm={searchTerm}
        setSearchTermHandler={setSearchTermHandler}
      />
      <DoctorsList searchTerm={searchTerm} />
    </main>
  );
};

export default page;
