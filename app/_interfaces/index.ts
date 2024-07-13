import { ReactNode } from "react";

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