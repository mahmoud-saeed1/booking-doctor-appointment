import { FC } from "react";
import Link from "next/link";
import "./index.css";

const DoctorCardFooter: FC = () => (
  <Link href="/" className="card__button">
    book now
  </Link>
);

export default DoctorCardFooter;
