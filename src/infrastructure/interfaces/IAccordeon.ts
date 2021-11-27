import { ReactElement } from "react";
export interface IAccordeonProps {
  title: string;
  content: string;
  classp: string;
  primary: string;
}

export interface IAccordeonContainerProps {
  children?: ReactElement | ReactElement[];
}
