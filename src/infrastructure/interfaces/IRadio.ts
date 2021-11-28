import { ReactElement } from "react";

export interface IRadioProps {
  onChange: (arg0: any) => void;
  name: string;
  text: string;
  primary?: string;
  keyValue: string;
}

export interface IRadioTitleProps {
  title: string;
}

export interface IRadioContainerProps {
  children?: ReactElement | ReactElement[];
}
