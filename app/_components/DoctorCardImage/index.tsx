import { FC } from "react";
import Image from "next/image";
import "./index.css";

interface DoctorCardImageProps {
  className?: string;
  image: string;
  name: string;
}

const DoctorCardImage: FC<DoctorCardImageProps> = ({
  image,
  name,
  className,
}) => (
  <div className={`${className} image__container--outer`}>
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
