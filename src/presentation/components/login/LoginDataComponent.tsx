import { useState } from "react";
import { ButtonComponent } from "../button/ButtonComponent";
import { FromHeaderComponent } from "../form/FromHeaderComponent";
import { InputComponent } from "../input/InputComponent";
import PoliticsComponent from "../PoliticsComponent";

export const LoginDataComponent = () => {
  const [nameInput, setNameInput] = useState("");
  const onChange = (str: string) => {
    setNameInput(str);
  };
  return (
    <div className="login__body">
      <form className="form form--50">
        <FromHeaderComponent
          title="Obtén tu"
          span="seguro ahora"
          paragraph="Ingresa los datos para comenzar."
        />
        <div className="form__group">
          <select className="input" name="document">
            <option value="DNI">DNI</option>
          </select>
          <InputComponent
            onChange={onChange}
            name="home_document"
            value={nameInput}
            label="N° de Documento"
          />
        </div>

        <InputComponent
          onChange={onChange}
          name="home_birth"
          value={nameInput}
          label="Fecha de nacimiento"
        />

        <InputComponent
          onChange={onChange}
          name="home_phone"
          value={nameInput}
          label="Celular"
        />

        <br />

        <PoliticsComponent text="Politica de Protección de Datos Personales y los Términos y Condiciones." />
        <PoliticsComponent text="Politica de Envio de Comunicaciones Comerciales." />

        <div className="form__buttom">
          <ButtonComponent
            value="comencemos"
            processing={false}
            type="primary"
          />
        </div>
      </form>
    </div>
  );
};
