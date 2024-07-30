import IconContainer from "@/app/_components/IconContainer";
import ContactInfo from "../ContactInfo";
import { IDoctorData } from "@/app/_interfaces";
import { CategoriesIcons } from "@/app/_data";
import AppointmentDialog from "../AppointmentDialog";
import Socials from "@/app/_components/Socials";
import "./index.css";

/*~~~~~~~~$ DoctorBody Component $~~~~~~~~*/
const DoctorBody = ({ doctorData }: { doctorData: IDoctorData }) => {
  const SpecialtyIcon = CategoriesIcons.find(
    (icon) => icon.label === doctorData.specialty
  )?.icon;
  return (
    <div className="doctor-body">
      {/* specialty box */}
      <div className="specialty-box md:justify-start">
        <IconContainer className="icon__container">
          {SpecialtyIcon && <SpecialtyIcon />}
        </IconContainer>
        <h2>{doctorData.specialty}</h2>
      </div>
      {/* name */}
      <h2 className="doctor-body__name">{`Dr. ${doctorData.name}`}</h2>
      {/* about */}
      <p className="doctor-body__about">{doctorData.about}</p>
      {/* contact */}
      <ContactInfo doctorData={doctorData} />
      {/* socials */}
      <Socials />
      {/* appointment */}
      <AppointmentDialog />
    </div>
  );
};

export default DoctorBody;
