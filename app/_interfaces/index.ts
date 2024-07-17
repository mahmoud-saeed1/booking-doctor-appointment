import { ReactNode } from "react";
import { TSpecialty } from "../types";

export interface ILinks {
  id: string;
  title: string;
  path: string;
}

export interface IHeroSlidesData {
  id: string;
  image: string;
  headding: string;
  paragraph: string;
  className?: string;
}

export interface IHeroImages {
  page: number;
  direction: number;
  HeroSlidesData: IHeroSlidesData[];
  imageIndex: number;
  className?: string;
}

export interface IHeroBody extends IHeroImages {
  paginate: (newDirection: number) => void;
}

export interface IIcon extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export interface IIconsContainer {
  className?: string;
  children?: ReactNode;
}

export interface IDoctorData {
  id: string;
  about: string;
  address: string;
  endTime: string;
  name: string;
  patients: string;
  phone: string;
  startTime: string;
  premiumTime: string | null;
  yearsOfExperience: number;
  specialty: TSpecialty;
  createdAt: Date;
  image: string;
  publishedAt: Date;
  updatedAt: Date;
}

export interface IDoctorCard {
  doctor: IDoctorData;
}