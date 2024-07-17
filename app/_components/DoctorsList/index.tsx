import { DoctorsData } from "@/app/_data";
import DoctorCard from "../DoctorCard";
import "./index.css";

const DoctorsList = () => {
  /*~~~~~~~~$ Renders $~~~~~~~~*/
  const doctorListRender = DoctorsData.map((doctor) => (
    <DoctorCard key={doctor.id} doctor={doctor} />
  ));
  return (
    <div className="container">
      <h1>popular doctors</h1>

      {/*~~~~~~~~$ Doctors List $~~~~~~~~*/}
      <div className="doctors__list">{doctorListRender}</div>
    </div>
  );
};

export default DoctorsList;
