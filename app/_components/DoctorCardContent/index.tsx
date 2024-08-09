import { FC, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { sliceText } from "@/lib/utils";
import { IDoctorCard } from "@/app/_interfaces";
import SpecialtyBox from "../SpecialtyBox";
import FavoriteButton from "../FavoriteButton";
import "./index.css";

interface DoctorCardContentProps {
  doctor: IDoctorCard["doctor"];
}

const DoctorCardContent: FC<DoctorCardContentProps> = ({ doctor }) => {
  /*~~~~~~~~$ States $~~~~~~~~*/
  const [isExpanded, setIsExpanded] = useState(false);

  /*~~~~~~~~$ Handlers $~~~~~~~~*/
  const handleToggle = () => setIsExpanded(!isExpanded);

  /*~~~~~~~~$ Global Variables $~~~~~~~~*/
  const { about, name, specialty, yearsOfExperience } = doctor;

  return (
    <article className="card__content relative">
      <FavoriteButton
        className="custom-favorite-button-class"
        doctorId={doctor.id}
      />

      <SpecialtyBox doctorSpecialty={specialty} />

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
