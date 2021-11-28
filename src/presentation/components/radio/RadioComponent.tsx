import React from "react";

import {
  IRadioContainerProps,
  IRadioProps,
  IRadioTitleProps,
} from "../../../infrastructure/interfaces/IRadio";

export const RadioItem: React.FC<IRadioProps> = ({
  name,
  // value,
  keyValue,
  primary,
  onChange,
  text,
}) => {
  return (
    <p>
      <input
        type="radio"
        id={`${keyValue}_${name}`}
        name={name}
        value={primary}
        onChange={(event) => onChange(event)}
        checked
      />
      <label htmlFor={`${keyValue}_${name}`}>{text}</label>
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
