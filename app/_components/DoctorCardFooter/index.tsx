import { FC, ReactNode } from "react";
import Link from "next/link";

const DoctorCardFooter: FC<{ doctorID: string; children?: ReactNode }> = ({
  doctorID,
  children,
}) => (
  <Link href={"/details/" + doctorID} className="card__button">
    {children}
    book now
  </Link>
);

export default DoctorCardFooter;
