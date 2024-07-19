// DoctorCardContent.tsx
import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { sliceText } from "@/lib/utils";
import { IDoctorCard } from "@/app/_interfaces";
import IconContainer from "../IconContainer";
import { CategoriesIcons } from "@/app/_data";
import "./index.css";

interface DoctorCardContentProps {
  doctor: IDoctorCard["doctor"];
}

const DoctorCardContent: FC<DoctorCardContentProps> = ({ doctor }) => {
  const { about, name, specialty, yearsOfExperience } = doctor;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(!isExpanded);

  const SpecialtyIcon = CategoriesIcons.find(
    (icon) => icon.label === specialty
  )?.icon;

  return (
    <article className="card__content">
      <div className="specialty-box">
        <IconContainer className="icon__container">
          {SpecialtyIcon && <SpecialtyIcon />}
        </IconContainer>
        <p>{specialty}</p>
      </div>

      <h3>{`Dr. ${name}`}</h3>
      <p>{`${yearsOfExperience} years of experience`}</p>
      <p>
        {isExpanded ? about : sliceText(about, 50)}
        {about.length > 50 && (
          <Button onClick={handleToggle} className="more__button">
            {isExpanded ? " show less" : "...show more"}
          </Button>
        )}
      </p>
    </article>
  );
};

export default DoctorCardContent;
