"use client";
import Hero from "./_components/Hero";
import GategorySearch from "./_components/GategorySearch";
import DoctorsList from "./_components/DoctorsList";
import { useState } from "react";
import Head from "next/head";

const Page = () => {
  /*~~~~~~~~$ States $~~~~~~~~*/
  const [searchTerm, setSearchTerm] = useState<string>("");

  /*~~~~~~~~$ Handlers $~~~~~~~~*/
  const setSearchTermHandler = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta
          name="description"
          content="Easily book appointments with our top doctors and specialists. Choose your preferred date, time, and doctor, and confirm your booking instantly. Convenient, fast, and secure online appointment scheduling."
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

export default Page;
