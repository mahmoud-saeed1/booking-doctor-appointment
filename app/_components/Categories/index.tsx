import IconContainer from "../IconContainer";
import { Bones, Brain, Dentist, Doctor, Ear, Heart } from "@/app/_icons";
import "./index.css";

const Categories = () => {
  return (
    <ul className="categories__contianer">
      {/*~~~~~~~~$ Dentist $~~~~~~~~*/}
      <li className="category__card">
        <IconContainer className="icon__container">
          <Dentist className="fill-primary" />
        </IconContainer>

        <p>dentist</p>
      </li>

      {/*~~~~~~~~$ Heart $~~~~~~~~*/}
      <li className="category__card">
        <IconContainer className="icon__container">
          <Heart className="fill-primary" />
        </IconContainer>

        <p>cardiologist</p>
      </li>

      {/*~~~~~~~~$ Bones $~~~~~~~~*/}
      <li className="category__card">
        <IconContainer className="icon__container">
          <Bones className="fill-primary" />
        </IconContainer>

        <p>orthopedic</p>
      </li>

      {/*~~~~~~~~$ Brain $~~~~~~~~*/}
      <li className="category__card">
        <IconContainer className="icon__container">
          <Brain className="fill-primary" />
        </IconContainer>

        <p>neurologist</p>
      </li>

      {/*~~~~~~~~$ Ear $~~~~~~~~*/}
      <li className="category__card">
        <IconContainer className="icon__container">
          {/* <Ear className="fill-primary"/> */}
          <Ear />
        </IconContainer>

        <p>otology</p>
      </li>

      {/*~~~~~~~~$ Doctor $~~~~~~~~*/}
      <li className="category__card">
        <IconContainer className="icon__container">
          <Doctor className="fill-primary" />
        </IconContainer>

        <p>general</p>
      </li>
    </ul>
  );
};

export default Categories;
