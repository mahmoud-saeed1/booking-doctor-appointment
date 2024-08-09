import React from "react";
import IconContainer from "@/app/_components/IconContainer";
import { CategoriesIcons } from "@/app/_data";

interface ISpecialtyBoxProps {
  doctorSpecialty: string;
  className?: string;
}

const SpecialtyBox = ({ doctorSpecialty, className = "" }: ISpecialtyBoxProps) => {
  const SpecialtyIcon = CategoriesIcons.find(
    (icon) => icon.label === doctorSpecialty
  )?.icon;

  return (
    <div className={`specialty-box ${className}`}>
      <IconContainer className="icon__container">
        {SpecialtyIcon && <SpecialtyIcon />}
      </IconContainer>
      <h2>{doctorSpecialty}</h2>
    </div>
  );
};

export default SpecialtyBox;
