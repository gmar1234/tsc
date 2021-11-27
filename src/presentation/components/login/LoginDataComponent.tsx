import PoliticsComponent from "../PoliticsComponent";

export const LoginDataComponent = () => {
  return (
    <div className="login__body">
      <form className="form">
        <div className="form__header">
          <h2 className="title">
            Obtén tu <span>seguro ahora</span>
          </h2>
          <p className="paragraph">Ingresa los datos para comenzar</p>
        </div>
        <div className="form__group">
          <select className="input" name="document">
            <option value="DNI">DNI</option>
          </select>
          <div className="gm-input">
            <input
              className="gm-input__item"
              name="document"
              id="documento"
              placeholder="N° de Documento"
            />
            <label htmlFor="documento">N° de Documento</label>
          </div>
        </div>

        <div className="gm-input">
          <input
            className="gm-input__item"
            name="birth"
            id="birth"
            placeholder="Fecha de nacimiento"
          />
          <label htmlFor="birth">Fecha de nacimiento</label>
        </div>

        <div className="gm-input">
          <input
            className="gm-input__item"
            name="celular"
            id="celular"
            placeholder="Celular"
          />
          <label htmlFor="celular">Celular</label>
        </div>

        <PoliticsComponent text="Politica de Protección de Datos Personales y los Términos y Condiciones." />
        <PoliticsComponent text="Politica de Envio de Comunicaciones Comerciales." />

        <div className="form__buttom">
          <button className="button button--primary" type="submit">
            COMENCEMOS
          </button>
        </div>
      </form>
    </div>
  );
};
