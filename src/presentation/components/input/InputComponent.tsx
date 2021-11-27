import React from "react";
import { IInputProps } from "../../../infrastructure/interfaces/IInput";

export const InputComponent: React.FC<IInputProps> = ({
  onChange,
  name,
  value,
  label,
}) => {
  return (
    <div className="gm-input">
      <input
        onChange={(event) => onChange(event.target.value)}
        placeholder={label}
        className="gm-input__item"
        value={value}
        id={`${name}_${label}`}
        name={name}
      />
      <label htmlFor={`${name}_${label}`}>{label}</label>
    </div>
  );
};
