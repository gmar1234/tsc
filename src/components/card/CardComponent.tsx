import React from "react";
import { BsCheck } from "react-icons/bs";
import { ICardProps } from "../../interfaces/ICard";

export const CardComponent: React.FC<ICardProps> = ({
  name,
  price,
  type,
  classp,
}) => {
  return (
    <div className={classp + `__item`}>
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
