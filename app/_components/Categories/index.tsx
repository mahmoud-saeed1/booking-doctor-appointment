import IconContainer from "../IconContainer";
import { CategoriesIcons } from "@/app/_data";
import Link from "next/link";
import "./index.css";

const Categories = () => {
  return (
    <div className="categories__contianer">
      {CategoriesIcons.map(({ icon: Icon, label }, index) => (
        <Link key={index} href={`/search/${label}`} className="category__card">
          <IconContainer className="icon__container--category w-8 h-8 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16 xl:w-12 xl:h-12">
            <Icon className="fill-primary" />
          </IconContainer>
          <p>{label}</p>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
