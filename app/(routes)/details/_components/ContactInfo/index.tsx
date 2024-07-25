import { IDoctorData } from "@/app/_interfaces";
import "./index.css";
/*~~~~~~~~$ ContactInfo Component $~~~~~~~~*/
const ContactInfo = ({ doctorData }: { doctorData: IDoctorData }) => {
  return (
    <div className="contact-info">
      <p className="contact-info__item">
        <strong>Address: </strong>
        <a href={`tel:${doctorData.phone}`}>{doctorData.address}</a>
      </p>
      <p className="contact-info__item">
        <strong>Phone: </strong>
        <a href={`tel:${doctorData.phone}`}>{doctorData.phone}</a>
      </p>
      <p className="contact-info__item">
        <strong>Experience: </strong> {doctorData.yearsOfExperience} years
      </p>
    </div>
  );
};

export default ContactInfo;
