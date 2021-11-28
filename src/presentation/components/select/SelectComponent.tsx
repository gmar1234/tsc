import React from "react";
import { ISelectProps } from "../../../infrastructure/interfaces/ISelect";

export const SelectComponent: React.FC<ISelectProps> = ({
  onChange,
  name,
  value,
  items,
  endMaxValidation = 0,
  firstMaxValidation = 0,
}) => {
  return (
    <select
      className={`gm-select ${
        firstMaxValidation < endMaxValidation ? "gm-select--error" : ""
      }`}
      name={name}
      value={value}
      onChange={(event) => onChange(event)}
    >
      {items.map((item, index) => {
        return (
          <option key={index} value={item.code}>
            {item.value}
          </option>
        );
      })}
    </select>
  );
};
