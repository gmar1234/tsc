import { useState } from "react";
import { ButtonComponent } from "../components/button/ButtonComponent";
import { FromHeaderComponent } from "../components/form/FromHeaderComponent";
import { InputComponent } from "../components/input/InputComponent";
import { SelectComponent } from "../components/select/SelectComponent";
import PoliticsComponent from "../components/PoliticsComponent";

import { IDataRegisterProps } from "../../infrastructure/interfaces/IData";
import { dataTypeDocument } from "../../infrastructure/utilities/UDataFake";
import { initialRegisterState } from "../../infrastructure/utilities/UInitialState";

export const LoginView = () => {
  const [registerData, setRegisterData] =
    useState<IDataRegisterProps>(initialRegisterState);
  const [isValidated, setisValidated] = useState<Boolean>(false);
  const { typeDocument, numberDocument, birth, phone } = registerData;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });

    if (
      typeDocument.length > 0 &&
      numberDocument.length > 7 &&
      birth.length > 0 &&
      phone.length > 4
    ) {
      setisValidated(true);
    } else {
      setisValidated(false);
    }
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
          <SelectComponent
            onChange={onChange}
            items={dataTypeDocument}
            name="typeDocument"
            value={typeDocument}
            endMaxValidation={8}
            firstMaxValidation={numberDocument.length}
          />
          <InputComponent
            onChange={onChange}
            name="numberDocument"
            value={numberDocument}
            label="N° de Documento"
            maxValidation={8}
            type="number"
            union={true}
          />
        </div>

        <InputComponent
          onChange={onChange}
          name="birth"
          value={birth}
          label="Fecha de nacimiento"
          maxValidation={4}
          type="date"
        />

        <InputComponent
          onChange={onChange}
          name="phone"
          value={phone}
          label="Celular"
          maxValidation={6}
          type="text"
        />

        <br />

        <PoliticsComponent text="Politica de Protección de Datos Personales y los Términos y Condiciones." />
        <PoliticsComponent text="Politica de Envio de Comunicaciones Comerciales." />

        <div className="form__buttom">
          <ButtonComponent
            value="comencemos"
            processing={false}
            type="primary"
            link="/add"
            validate={isValidated ? true : false}
          />
        </div>
      </form>
    </div>
  );
};
