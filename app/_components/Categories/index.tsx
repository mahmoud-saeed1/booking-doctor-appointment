import IconContainer from "../IconContainer";
import { CategoriesIcons } from "@/app/_data";
import "./index.css";

const Categories = () => {
  return (
    <ul className="categories__contianer">
      {CategoriesIcons.map(({ icon: Icon, label }, index) => (
        <li key={index} className="category__card">
          <IconContainer className="icon__container--category">
            <Icon className="fill-primary" />
          </IconContainer>
          <p>{label}</p>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
