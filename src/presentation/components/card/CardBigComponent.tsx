import React from "react";
import { ICardBigProps } from "../../../infrastructure/interfaces/ICard";

import Img from "../../assets/img/money.png";

export const CardBigComponent: React.FC<ICardBigProps> = ({ name }) => {
  return (
    <div className="content">
      <div className="content__data">
        <h2>Cobertura máxima</h2>
        <p className="content__price">
          <span>S/</span>5MM
        </p>
        <span className="tag tag--green">plan {name}</span>
      </div>
      <div className="center-element-all">
        <img src={Img} alt="" />
      </div>
    </div>
  );
};
