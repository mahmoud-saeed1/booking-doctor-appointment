import Hero from "./_components/Hero";
import GategorySearch from "./_components/GategorySearch";
import DoctorsList from "./_components/DoctorsList";

export default function Home() {
  return (
    <main>
      <Hero />
        <GategorySearch />
        <DoctorsList />
    </main>
  );
}
