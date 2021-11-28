import React from "react";
import { BsCheck } from "react-icons/bs";
import { ICardProps } from "../../../infrastructure/interfaces/ICard";

export const CardComponent: React.FC<ICardProps> = ({
  name,
  price,
  type,
  classp,
  onClick,
  active,
}) => {
  return (
    <div
      className={classp + `__item ${name === active ? "active" : null}`}
      onClick={() => onClick(name)}
    >
      <div className={classp + `__circle`}>
        <BsCheck />
      </div>
      <h1 className={classp + `__title`}>{name}</h1>
      <p className={classp + `__price`}>
        <span>S/</span> {price}
      </p>
      <p className={classp + `__type`}>{type}</p>
    </div>
  );
};
