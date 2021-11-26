import React from "react";

import { LeftContainerComponent } from "../components/container/LeftContainerComponent";
import { FormTopComponent } from "../components/form/FormTopComponent";
import { FromHeaderComponent } from "../components/form/FromHeaderComponent";
export const AddView = () => {
  return (
    <div className="gm-container gm-container--two gm-add">
      <LeftContainerComponent />
      <div className="gm-container__rigth">
        <form className="form">
          <FormTopComponent />
          <FromHeaderComponent
            title="Hola"
            span="Pepito"
            paragraph="valida que los datos sean correctos"
          />
          <div className="form__call">Datos personales del titular</div>
          <div className="form__group">
            <select className="input" name="document">
              <option value="DNI">DNI</option>
            </select>
            <div className="gm-input">
              <input
                className="gm-input__item"
                name="add_document"
                id="add_document"
                placeholder="N° de Documento"
              />
              <label htmlFor="add_document">N° de Documento</label>
            </div>
          </div>

          <div className="gm-input">
            <input
              className="gm-input__item"
              name="add_name"
              id="add_name"
              placeholder="Nombres"
            />
            <label htmlFor="add_name">Nombres</label>
          </div>

          <div className="gm-input">
            <input
              className="gm-input__item"
              name="add_last_name_one"
              id="add_last_name_one"
              placeholder="Apellido Paterno"
            />
            <label htmlFor="add_last_name_one">Apellido Paterno</label>
          </div>

          <div className="gm-input">
            <input
              className="gm-input__item"
              name="add_last_name_two"
              id="add_last_name_two"
              placeholder="Apellido Paterno"
            />
            <label htmlFor="add_last_name_two">Apellido Materno</label>
          </div>

          <div className="gm-input">
            <input
              className="gm-input__item"
              name="add_birth"
              id="add_birth"
              placeholder="Apellido Paterno"
            />
            <label htmlFor="add_birth">Fecha de nacimiento</label>
          </div>

          <div className="gm-radio">
            <h2 className="gm-radio__title">Género</h2>
            <p>
              <input type="radio" id="test1" name="radio-group" checked />
              <label htmlFor="test1">Masculino</label>
            </p>
            <p>
              <input type="radio" id="test2" name="radio-group" />
              <label htmlFor="test2">Femenino</label>
            </p>
          </div>

          <div className="gm-radio">
            <h2 className="gm-radio__title">¿A quién vamos a asegurar?</h2>
            <p>
              <input type="radio" id="test1" name="radio-group" checked />
              <label htmlFor="test1">Solo a mí</label>
            </p>
            <p>
              <input type="radio" id="test2" name="radio-group" />
              <label htmlFor="test2">A mi y mi familia</label>
            </p>
          </div>

          <div className="form__buttom">
            <button className="button button--primary" type="submit">
              CONTINUAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
