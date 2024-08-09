import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { sliceText } from "@/lib/utils";
import { IDoctorCard } from "@/app/_interfaces";
import SpecialtyBox from "../SpecialtyBox";
import "./index.css";

interface DoctorCardContentProps {
  doctor: IDoctorCard["doctor"];
}

const DoctorCardContent: FC<DoctorCardContentProps> = ({ doctor }) => {
  const { about, name, specialty, yearsOfExperience } = doctor;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(!isExpanded);

  return (
    <article className="card__content">
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
