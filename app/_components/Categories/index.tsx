import IconContainer from "../IconContainer";
import { Bones, Brain, Dentist, Doctor, Ear, Heart } from "@/app/_icons";
import "./index.css";

const Categories = () => {
  return (
    <ul className="categories__contianer">
      {/*~~~~~~~~$ Dentist $~~~~~~~~*/}
      <li className="category__card">
        <IconContainer className="icon__container--category">
          <Dentist className="fill-primary" />
        </IconContainer>

        <p>dentist</p>
      </li>

      {/*~~~~~~~~$ Heart $~~~~~~~~*/}
      <li className="category__card">
        <IconContainer className="icon__container--category">
          <Heart className="fill-primary" />
        </IconContainer>

        <p>cardiologist</p>
      </li>

      {/*~~~~~~~~$ Bones $~~~~~~~~*/}
      <li className="category__card">
        <IconContainer className="icon__container--category">
          <Bones className="fill-primary" />
        </IconContainer>

        <p>orthopedic</p>
      </li>

      {/*~~~~~~~~$ Brain $~~~~~~~~*/}
      <li className="category__card">
        <IconContainer className="icon__container--category">
          <Brain className="fill-primary" />
        </IconContainer>

        <p>neurologist</p>
      </li>

      {/*~~~~~~~~$ Ear $~~~~~~~~*/}
      <li className="category__card">
        <IconContainer className="icon__container--category">
          {/* <Ear className="fill-primary"/> */}
          <Ear />
        </IconContainer>

        <p>otology</p>
      </li>

      {/*~~~~~~~~$ Doctor $~~~~~~~~*/}
      <li className="category__card">
        <IconContainer className="icon__container--category">
          <Doctor className="fill-primary" />
        </IconContainer>

        <p>general</p>
      </li>
    </ul>
  );
};

export default Categories;
