import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../application/Store";
import { GetPerson } from "../../application/action/person/PersonActions";
import { FormTopComponent } from "../components/form/FormTopComponent";
import { FromHeaderComponent } from "../components/form/FromHeaderComponent";
import { InputComponent } from "../components/input/InputComponent";
import { ButtonComponent } from "../components/button/ButtonComponent";
import {
  RadioComponent,
  RadioItem,
  RadioTitle,
} from "../components/radio/RadioComponent";

export const AddView = () => {
  const dispatch = useDispatch();
  const personState = useSelector((state: RootStore) => state.pokemon);
  const [nameInput, setNameInput] = useState("");

  const onChange = (str: string) => {
    setNameInput(str);
  };

  useEffect(() => {
    console.log("pokemon state:", personState);
    dispatch(GetPerson());
  }, [dispatch]);

  return (
    <form className="form form--50">
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
        <InputComponent
          onChange={onChange}
          name="add_document"
          value={nameInput}
          label="N° de Documento"
        />
      </div>

      <InputComponent
        onChange={onChange}
        name="add_name"
        value={nameInput}
        label="Nombres"
      />

      <InputComponent
        onChange={onChange}
        name="add_last_name_one"
        value={nameInput}
        label="Apellido Paterno"
      />

      <InputComponent
        onChange={onChange}
        name="add_last_name_two"
        value={nameInput}
        label="Apellido Materno"
      />

      <InputComponent
        onChange={onChange}
        name="add_birth"
        value={nameInput}
        label="Fecha de nacimiento"
      />

      <RadioComponent>
        <RadioTitle title="Género" />
        <RadioItem name="genero" value="Masculino" key="masc" />
        <RadioItem name="genero" value="Femenino" key="feme" />
      </RadioComponent>

      <RadioComponent>
        <RadioTitle title="¿A quién vamos a asegurar?" />
        <RadioItem name="asegurar" value="Solo a mí" key="soloa" />
        <RadioItem name="asegurar" value="A mi y mi familia" key="ami" />
      </RadioComponent>

      <div className="form__buttom">
        <ButtonComponent value="continuar" processing={false} type="primary" />
      </div>
    </form>
  );
};
