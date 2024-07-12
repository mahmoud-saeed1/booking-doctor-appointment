import { IHeroSlidesData, ILinks } from "../_interfaces";
import { v4 as uuid } from "uuid";

export const LinksData: ILinks[] = [
  { id: uuid(), title: "home", path: "/" },
  { id: uuid(), title: "explore", path: "/explore" },
  { id: uuid(), title: "contace us", path: "/contace" },
];

export const HeroSlidesData:IHeroSlidesData[] = [
  {
    id: uuid(),
    image: "/doctors.webp",
    headding: "Find and Book Your Appointments with Ease",
    paragraph:
      "Our platform provides a seamless way to find and book appointments with healthcare professionals. Whether you need a general check-up or a specialist consultation, we have got you covered with just a few clicks.",
  },
  {
    id: uuid(),
    image: "/doctors1.webp",
    headding: "Your Health, Our Priority",
    paragraph:
      "We prioritize your health and well-being by connecting you with experienced doctors and specialists. Our commitment is to ensure you receive the best possible care at your convenience.",
  },
  {
    id: uuid(),
    image: "/doctors.webp",
    headding: "Quality Care for Everyone",
    paragraph:
      "We believe in providing quality healthcare for everyone. Our services are designed to be accessible and affordable, ensuring that you get the care you deserve, regardless of your circumstances.",
  },
];
