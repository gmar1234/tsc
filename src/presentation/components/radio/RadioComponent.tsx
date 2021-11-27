import React from "react";
import {
  IRadioContainerProps,
  IRadioProps,
  IRadioTitleProps,
} from "../../../infrastructure/interfaces/IRadio";

export const RadioItem: React.FC<IRadioProps> = ({ name, value, key }) => {
  return (
    <p>
      <input type="radio" id={`${key}_${name}`} name={name} checked />
      <label htmlFor={`${key}_${name}`}>{value}</label>
    </p>
  );
};

export const RadioTitle: React.FC<IRadioTitleProps> = ({ title }) => {
  return <h2 className="gm-radio__title">{title}</h2>;
};

export const RadioComponent: React.FC<IRadioContainerProps> = ({
  children,
}) => {
  return <div className="gm-radio">{children}</div>;
};
