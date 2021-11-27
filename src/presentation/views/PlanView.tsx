import React from "react";
import { CardComponent } from "../components/card/CardComponent";
import { LeftContainerComponent } from "../components/container/LeftContainerComponent";
import { FormTopComponent } from "../components/form/FormTopComponent";
import { FromHeaderComponent } from "../components/form/FromHeaderComponent";

import { ListPlanAcomponent } from "../components/list/ListPlanAcomponent";
import { CardBigComponent } from "../components/card/CardBigComponent";
import {
  AcordeonComponent,
  AcordeonItem,
} from "../components/accordeon/AcordeonComponent";
import { ButtonComponent } from "../components/button/ButtonComponent";

const CardData = [
  {
    name: "básico",
    price: 160,
    type: "mensual",
  },
  {
    name: "avanzado",
    price: 200,
    type: "mensual",
  },
  {
    name: "premium",
    price: 250,
    type: "mensual",
  },
  {
    name: "full",
    price: 500,
    type: "mensual",
  },
];

const AccoredeonData = [
  {
    title: "Servicios brindados",
    content: "texto para los servicios brindados",
    primary: "servicios",
  },

  {
    title: " Exclusiones",
    content: "texto para los  Exclusiones",
    primary: "exclusiones",
  },
];

const ListData = [
  {
    type: "primary",
    text: "Lima",
    span: "zona de cobertura",
  },
  {
    type: "primary",
    text: "+30 clínicas",
    span: "en red afiliada",
  },
  {
    type: "secondary",
    text: "Médico a domicilio",
    span: "",
  },
  {
    type: "secondary",
    text: "Chequeos preventivos",
    span: "",
  },
  {
    type: "tertiary",
    text: "Reembolso nacional",
    span: "",
  },
  {
    type: "tertiary",
    text: "Reembolso internacional",
    span: "",
  },
];

export const PlanView = () => {
  return (
    <form className="form form--70">
      <FormTopComponent />
      <FromHeaderComponent
        title="Elige"
        span="tu protección"
        paragraph="selecciona tu plan de salud ideal."
      />
      <div className="gm-card-small mb-30">
        {CardData.map((card, index) => (
          <CardComponent
            key={index}
            name={card.name}
            price={card.price}
            type={card.type}
            classp="gm-card-small"
          />
        ))}
      </div>

      <div className="gm-card-big">
        <div className="gm-card-big__header">
          <p>Cuentas con estos beneficios</p>
        </div>
        <div className="gm-card-big__body">
          <CardBigComponent />
          <div className="list">
            <ul>
              {ListData.map((list, index) => (
                <ListPlanAcomponent
                  key={index}
                  type={list.type}
                  span={list.span}
                  text={list.text}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="gm-services">
        <div className="gm-services__title">
          <h2>Revisa nuestros</h2>
          <p>servicios y exclusiones</p>
        </div>

        <AcordeonComponent>
          {AccoredeonData.map((acordeon, index) => (
            <AcordeonItem
              key={index}
              title={acordeon.title}
              content={acordeon.content}
              primary={acordeon.primary}
              classp="tab"
            />
          ))}
        </AcordeonComponent>
      </div>

      <div className="form__buttom between-elemet-all">
        <a href="!#" className="button button--simple">
          enviar cotización por correo
        </a>
        <ButtonComponent
          value="comprar plan"
          processing={false}
          type="primary"
        />
      </div>
    </form>
  );
};
