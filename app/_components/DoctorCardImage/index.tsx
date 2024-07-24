import { FC } from "react";
import Image from "next/image";
import "./index.css";

interface DoctorCardImageProps {
  image: string;
  name: string;
}

const DoctorCardImage: FC<DoctorCardImageProps> = ({ image, name }) => (
  <div className="image__container--outer">
    <div className="image__container--inner">
      {image && (
        <Image
          src={image}
          alt={name}
          width={384}
          height={216}
          className="doctor__image"
        />
      )}
    </div>
  </div>
);

export default DoctorCardImage;
