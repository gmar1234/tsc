import { ButtonComponent } from "../components/button/ButtonComponent";

export const EndView = () => {
  return (
    <div className="gm-end">
      <h1>
        ¡Gracias por{" "}
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
        <ButtonComponent
          value="ir a salud"
          processing={false}
          type="primary"
          link="404"
          validate={true}
        />
      </div>
    </div>
  );
};
