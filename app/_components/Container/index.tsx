import { ReactNode } from "react";
import "./index.css";

interface IContainer {
  className?: string;
  children?: ReactNode;
}
const Container = ({ className, children }: IContainer) => {
  return <div className={className}>{children}</div>;
};

export default Container;
