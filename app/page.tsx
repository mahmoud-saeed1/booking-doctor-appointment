"use client";
import Hero from "./_components/Hero";
import GategorySearch from "./_components/GategorySearch";
import DoctorsList from "./_components/DoctorsList";
import { useState } from "react";
import Head from "next/head";

const page = () => {
  /*~~~~~~~~$ States $~~~~~~~~*/
  const [searchTerm, setSearchTerm] = useState<string>("");

  /*~~~~~~~~$ Handlers $~~~~~~~~*/
  const setSearchTermHandler = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  return (
    <>
      <Head>
        <title>Atsha | about Page</title>
        <meta
          name="description"
          content="Atsha about page contains main data about us and our mission and vision and our achievements"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logobb.svg" />
      </Head>
      <main>
        <Hero />
        <GategorySearch
          searchTerm={searchTerm}
          setSearchTermHandler={setSearchTermHandler}
        />
        <DoctorsList searchTerm={searchTerm} />
      </main>
    </>
  );
};

export default page;
