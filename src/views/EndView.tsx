import React from "react";
import { LeftContainerComponent } from "../components/container/LeftContainerComponent";

export const EndView = () => {
  return (
    <div className="gm-container gm-container--two gm-add">
      <LeftContainerComponent />
      <div className="gm-container__rigth center-element-all">
        <div className="gm-end">
          <h1>
            ¡Gracias por
            <span>
              confiar en <br /> nosotros!
            </span>
          </h1>
          <p>
            Queremos conocer mejor la salud de los asegurados. Un asesor{" "}
            <span>se pondrá en contacto</span> contigo en las siguientes{" "}
            <span>48 horas</span>
          </p>
          <div className="gm-end__buttons end-element-all">
            <button className="button button--primary">IR A SALUD</button>
          </div>
        </div>
      </div>
    </div>
  );
};
