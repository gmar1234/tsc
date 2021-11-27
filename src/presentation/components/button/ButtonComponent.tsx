import React from "react";
import { IButtonProps } from "../../../infrastructure/interfaces/IButton";

export const ButtonComponent: React.FC<IButtonProps> = ({
  value,
  processing,
  type,
}) => {
  return (
    <button className={`button button--${type}`}>
      {processing ? "Procesando" : value}
    </button>
  );
};
