import IconContainer from "../IconContainer";
import { Bones, Brain, Dentist, Doctor, Ear, Heart } from "@/app/_icons";
import "./index.css";

const Categories = () => {
  return (
    <div className="categories__contianer">
      {/*~~~~~~~~$ Dentist $~~~~~~~~*/}
      <div className="category__card">
        <IconContainer className="icon__container">
          <Dentist className="fill-primary" />
        </IconContainer>

        <p>dentist</p>
      </div>

      {/*~~~~~~~~$ Heart $~~~~~~~~*/}
      <div className="category__card">
        <IconContainer className="icon__container">
          <Heart className="fill-primary" />
        </IconContainer>

        <p>cardiologist</p>
      </div>

      {/*~~~~~~~~$ Bones $~~~~~~~~*/}
      <div className="category__card">
        <IconContainer className="icon__container">
          <Bones className="fill-primary" />
        </IconContainer>

        <p>orthopedic</p>
      </div>

      {/*~~~~~~~~$ Brain $~~~~~~~~*/}
      <div className="category__card">
        <IconContainer className="icon__container">
          <Brain className="fill-primary" />
        </IconContainer>

        <p>neurologist</p>
      </div>

      {/*~~~~~~~~$ Ear $~~~~~~~~*/}
      <div className="category__card">
        <IconContainer className="icon__container">
          {/* <Ear className="fill-primary"/> */}
          <Ear />
        </IconContainer>

        <p>otology</p>
      </div>

      {/*~~~~~~~~$ Doctor $~~~~~~~~*/}
      <div className="category__card">
        <IconContainer className="icon__container">
          <Doctor className="fill-primary" />
        </IconContainer>

        <p>general</p>
      </div>
    </div>
  );
};

export default Categories;
