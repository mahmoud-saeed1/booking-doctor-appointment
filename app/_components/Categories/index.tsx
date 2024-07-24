import IconContainer from "../IconContainer";
import { CategoriesIcons } from "@/app/_data";
import "./index.css";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="categories__contianer">
      {CategoriesIcons.map(({ icon: Icon, label }, index) => (
        <Link href={`/search/${label}`} className="category__card">
          <IconContainer className="icon__container--category">
            <Icon className="fill-primary" />
          </IconContainer>
          <p>{label}</p>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
