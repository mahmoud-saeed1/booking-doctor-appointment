import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import GategorySearch from "./_components/GategorySearch";
import Container from "./_components/Container";

export default function Home() {
  return (
    <main>
      <Container>
        <Hero />
        <GategorySearch />
      </Container>
    </main>
  );
}
