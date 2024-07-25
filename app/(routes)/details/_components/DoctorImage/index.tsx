import Image from "next/image";
import "./index.css";

/*~~~~~~~~$ DoctorImage Component $~~~~~~~~*/
const DoctorImage = ({ image, name }: { image: string; name: string }) => {
  return (
    <div className="doctor-image">
      <div className="doctor-image__inner">
        <Image src={image} alt={name} className="doctor-image__img" priority />
      </div>
    </div>
  );
};

export default DoctorImage;
