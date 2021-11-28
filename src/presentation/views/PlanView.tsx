import React, { useState } from "react";
import {
  CardData,
  AccoredeonData,
  ListData,
} from "../../infrastructure/utilities/UDataFake";
import { CardComponent } from "../components/card/CardComponent";
import { ButtonComponent } from "../components/button/ButtonComponent";
import { FormTopComponent } from "../components/form/FormTopComponent";
import { ListPlanAcomponent } from "../components/list/ListPlanAcomponent";
import { FromHeaderComponent } from "../components/form/FromHeaderComponent";
import {
  AcordeonComponent,
  AcordeonItem,
} from "../components/accordeon/AcordeonComponent";
import { CardBigComponent } from "../components/card/CardBigComponent";

export const PlanView = () => {
  const [plan, setPlan] = useState<string>("básico");

  const handlePlan = (plan: string) => {
    setPlan(plan);
  };
  return (
    <form className="form form--70">
      <FormTopComponent link="add" step={2} />
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
            onClick={handlePlan}
            active={plan}
          />
        ))}
      </div>

      <div className="gm-card-big">
        <div className="gm-card-big__header">
          <p>Cuentas con estos beneficios</p>
        </div>
        <div className="gm-card-big__body">
          <CardBigComponent name={plan} />
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
          link="end"
          validate={true}
        />
      </div>
    </form>
  );
};
