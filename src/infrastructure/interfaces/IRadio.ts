import { ReactElement } from "react";

export interface IRadioProps {
  name: string;
  value: string;
  key: string;
}

export interface IRadioTitleProps {
  title: string;
}

export interface IRadioContainerProps {
  children?: ReactElement | ReactElement[];
}
