import { IDoctorData } from "@/app/_interfaces";
import DoctorSmallCard from "../DoctorSmallCard";
import "./index.css";

const SuggestedDoctors = ({
  suggestedDoctors,
}: {
  suggestedDoctors: IDoctorData[];
}) => {
  /*~~~~~~~~$ Renders $~~~~~~~~*/
  const doctorsRender = suggestedDoctors.map((doctor) => (
    <DoctorSmallCard key={doctor.id} doctor={doctor} />
  ));
  return (
    <div className="suggested-doctors">
      <h3 className="suggested-doctors__title">Suggested Doctors</h3>
      <div className="suggested-doctors__carousel">{doctorsRender}</div>
    </div>
  );
};

export default SuggestedDoctors;
