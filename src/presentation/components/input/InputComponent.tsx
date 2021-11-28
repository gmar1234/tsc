import React from "react";
import { IInputProps } from "../../../infrastructure/interfaces/IInput";

export const InputComponent: React.FC<IInputProps> = ({
  onChange,
  name,
  value = "",
  label,
  maxValidation = 0,
  type,
  union = false,
}) => {
  return (
    <div
      className={`gm-input ${
        value.length < maxValidation ? "gm-input--error" : ""
      }`}
    >
      <input
        type={type}
        onChange={(event) => onChange(event)}
        placeholder={label}
        className={`gm-input__item ${union ? "gm-input__union" : ""}`}
        value={value}
        id={`${name}_${label}`}
        name={name}
      />
      <label htmlFor={`${name}_${label}`}>{label}</label>
    </div>
  );
};
