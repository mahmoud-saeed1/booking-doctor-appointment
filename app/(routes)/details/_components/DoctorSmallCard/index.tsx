import Image from "next/image";
import { IDoctorData } from "@/app/_interfaces";
import Link from "next/link";
import IconContainer from "@/app/_components/IconContainer";
import { CategoriesIcons } from "@/app/_data";
import "./index.css";

/*~~~~~~~~$ DoctorCard Component $~~~~~~~~*/
const DoctorSmallCard = ({ doctor }: { doctor: IDoctorData }) => {
  const SpecialtyIcon = CategoriesIcons.find(
    (icon) => icon.label === doctor.specialty
  )?.icon;

  return (
    <Link href={`/details/${doctor.id}`} className="doctor-card">
      <div className="doctor-card__content">
        {/*~~~~~~~~$ Doctor Image $~~~~~~~~*/}
        <div className="doctor-card__image-container">
          <div className="doctor-card__image-inner">
            <Image
              src={doctor.image}
              alt={doctor.name}
              className="doctor-card__image"
              priority
            />
          </div>
        </div>

        {/*~~~~~~~~$ Doctor Name And Specialty $~~~~~~~~*/}
        <article className="doctor-card__body">
          {/* specialty box */}
          <div className="doctor-card__specialty-box">
            <IconContainer className="doctor-card__icon">
              {SpecialtyIcon && <SpecialtyIcon />}
            </IconContainer>
            <h1 className="doctor-card__specialty">{doctor.specialty}</h1>
          </div>
          <p className="doctor-card__name">{`Dr. ${doctor.name}`}</p>
        </article>
      </div>
    </Link>
  );
};

export default DoctorSmallCard;
