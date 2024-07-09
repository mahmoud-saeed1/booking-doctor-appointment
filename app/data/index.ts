import { ILinks } from "../interfaces";
import { v4 as uuid } from "uuid";

export const LinksData: ILinks[] = [
  { id: uuid(), title: "home", path: "/" },
  { id: uuid(), title: "explore", path: "/explore" },
  { id: uuid(), title: "contace us", path: "/contace" },
];
