import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootStore } from "../../application/Store";
import { GetPerson } from "../../application/action/person/PersonActions";

import { IPersonDataProps } from "../../infrastructure/interfaces/IPersonData";
import { changeFormatDate } from "../../infrastructure/utilities/UDate";
import { dataTypeDocument } from "../../infrastructure/utilities/UDataFake";
import { initialPersonState } from "../../infrastructure/utilities/UInitialState";

import { SelectComponent } from "../components/select/SelectComponent";
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
  const personState = useSelector((state: RootStore) => state.person);
  const [personData, setPersonData] =
    useState<IPersonDataProps>(initialPersonState);

  const {
    nomCompleto,
    apellidoPaterno,
    nombres,
    tipoDocumento,
    apellidoMaterno,
    numDocumento,
    fecNacimiento,
  } = personData;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPersonData({
      ...personData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (personState?.tercero) {
      setPersonData({
        ...personState.tercero,
        fecNacimiento: changeFormatDate(personState.tercero.fecNacimiento),
      });
    }
  }, [personState]);

  useEffect(() => {
    dispatch(GetPerson());
  }, [dispatch]);

  return (
    <form className="form form--50">
      <FormTopComponent link="" step={1} />
      <FromHeaderComponent
        title="Hola"
        span={nombres}
        paragraph="valida que los datos sean correctos"
      />
      <div className="form__call">Datos personales del titular</div>
      <div className="form__group">
        <SelectComponent
          onChange={onChange}
          items={dataTypeDocument}
          name="tipoDocumento"
          value={tipoDocumento}
        />
        <InputComponent
          type="text"
          onChange={onChange}
          name="numDocumento"
          value={numDocumento}
          label="N° de Documento"
          union={true}
        />
      </div>

      <InputComponent
        type="text"
        onChange={onChange}
        name="nomCompleto"
        value={nomCompleto}
        label="Nombres"
      />

      <InputComponent
        type="text"
        onChange={onChange}
        name="apellidoPaterno"
        value={apellidoPaterno}
        label="Apellido Paterno"
      />

      <InputComponent
        type="text"
        onChange={onChange}
        name="apellidoMaterno"
        value={apellidoMaterno}
        label="Apellido Materno"
      />

      <InputComponent
        type="date"
        onChange={onChange}
        name="fecNacimiento"
        value={fecNacimiento.replace("/", "-")}
        label="Fecha de nacimiento"
      />

      <RadioComponent>
        <RadioTitle title="Género" />
        <RadioItem
          name="sexo"
          primary="M"
          text="Masculino"
          keyValue="masc"
          onChange={onChange}
        />
        <RadioItem
          name="sexo"
          primary="F"
          text="Femenino"
          keyValue="feme"
          onChange={onChange}
        />
      </RadioComponent>

      <RadioComponent>
        <RadioTitle title="¿A quién vamos a asegurar?" />
        <RadioItem
          name="asegurar"
          text="Solo a mí"
          keyValue="soloa"
          onChange={onChange}
        />
        <RadioItem
          name="asegurar"
          text="A mi y mi familia"
          keyValue="ami"
          onChange={onChange}
        />
      </RadioComponent>

      <div className="form__buttom end-element-all">
        <ButtonComponent
          value="continuar"
          processing={false}
          type="primary"
          link="plan"
          validate={true}
        />
      </div>
    </form>
  );
};
