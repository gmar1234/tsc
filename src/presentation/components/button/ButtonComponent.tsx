import React from "react";
import { Link } from "react-router-dom";

import { IButtonProps } from "../../../infrastructure/interfaces/IButton";

export const ButtonComponent: React.FC<IButtonProps> = ({
  value,
  processing,
  type,
  link,
  validate = false,
}) => {
  return (
    <>
      {validate ? (
        <Link to={link} className={`button button--${type}`}>
          {processing ? "Procesando" : value}
        </Link>
      ) : (
        <button disabled className={`button button--disabled`}>
          {value}
        </button>
      )}
    </>
  );
};
