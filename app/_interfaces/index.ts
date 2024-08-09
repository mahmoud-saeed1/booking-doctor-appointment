import { ChangeEvent, FC, ReactNode } from "react";
import { TSpecialty } from "../types";

export interface ILinks {
  id: string;
  title: string;
  path: string;
}

export interface IHeroImages {
  page: number;
  direction: number;
  HeroSlidesData: IHeroSlidesData[];
  imageIndex: number;
  className?: string;
}

export interface IHeroSlidesData {
  id: string;
  image: string;
  heading: string;
  paragraph: string;
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

// export interface IDoctorData {
//   id: string;
//   about: string;
//   address: string;
//   endTime: string;
//   name: string;
//   patients: string;
//   phone: string;
//   startTime: string;
//   premiumTime: string | null;
//   yearsOfExperience: number;
//   specialty: TSpecialty;
//   createdAt: Date;
//   image: string;
//   publishedAt: Date;
//   updatedAt: Date;
// }
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

export interface IFormData {
  id: string;
  doctorId: string;
  name: string;
  age: string;
  gender: string;
  address: string;
  phone: string;
  whatsapp: string;
  date: Date;
  timeSlot: string;
}

export interface IErrors {
  name: string;
  age: string;
  gender: string;
  address: string;
  phone: string;
  whatsapp: string;
  date: string;
  timeSlot: string;
}

export interface IDoctorCard {
  doctor: IDoctorData;
}

export interface ISocialLinks {
  id: string;
  plateform: string;
  label: string;
  URL: string;
  icon?: FC<React.SVGProps<SVGSVGElement>>;
}

export interface ISocials {
  className?: string;
  socialLinks?: ISocialLinks[];
}

export interface IHeroSlidesData {
  id: string;
  image: string;
  heading: string;
  paragraph: string;
}

export interface IHeroContentProps {
  heading: string;
  paragraph: string;
}

export interface IHeroImageProps {
  imageSrc: string;
  altText: string;
}

export interface IHeroNavigationProps {
  onPrev: () => void;
  onNext: () => void;
}

export interface ILinkButton {
  className?: string;
  label: string;
  path: string;
}

export interface ISectionTilel {
  className?: string;
  title: string;
  children?: ReactNode;
}

export interface IAppointment {
  id: string;
  doctorId: string;
  doctorName: string;
  doctorSpecialty: string;
  name: string;
  age: string;
  gender: string;
  address: string;
  phone: string;
  whatsapp: string;
  date: Date;
  timeSlot: string;
}

export interface Specialty {
  id: number;
  specialty: TSpecialty;
}

export interface ISearch {
  searchTerm: string;
  setSearchTermHandler: (searchTerm: string) => void;
}

export interface IAppointment {
  appointment: IAppointment;
  onDelete?: (id: string) => void;
  onUpdate?: (appointment: IAppointment) => void;
}

export interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

export interface FormRadioGroupProps {
  name: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  options: { value: string; label: string }[];
  error: string;
}
