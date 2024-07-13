import { IIconsContainer } from "@/app/_interfaces";
import "./index.css";

const IconContainer = ({ className, children }: IIconsContainer) => {
  return <div className={`${className} icon__container`}>{children}</div>;
};

export default IconContainer;
