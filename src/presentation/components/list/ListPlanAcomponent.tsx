import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { IListPlanProps } from "../../../infrastructure/interfaces/IListPlan"; 

export const ListPlanAcomponent: React.FC<IListPlanProps> = ({
  type,
  span = "",
  text,
}) => {
  return (
    <>
      <li className={`list__${type}`}>
        <AiFillHeart /> {text}{" "}
        {type === "primary" ? <span>({span})</span> : null}
      </li>
    </>
  );
};