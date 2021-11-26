import React from "react";
import "./assets/style/style.scss";
import Smoke from "./assets/img/smoke.png";
import PoliticsComponent from "./components/PoliticsComponent";
import { MdSecurity,MdPhoneIphone,MdOutlineMoney,MdOutlineLocalHospital } from "react-icons/md";

function App() {
  return (
    <div className="login">
      <div className="login__banner">
        <div className="clip-path"></div>

        <div className="login__text">
          <h2 className="login__title ">
            Seguro de <br />
            <span className="font-bold">Salud</span>
          </h2>
          <div className="login__list">
            <ul>
              <li> <MdSecurity /> Cómpralo de manera facil y rápida</li>
              <li> <MdPhoneIphone /> Cotiza y compra tu seguro 100% digital</li>
              <li> <MdOutlineMoney /> Hasta S/. 12 millones de cobertura anual</li>
              <li> <MdOutlineLocalHospital />Más de 300 clínicas en todo el Perú</li>
            </ul>
          </div>
        </div>
        <p className="login__footer">
          &copy; 2021 RIMAC y Company
        </p>

        <img  src={Smoke} className="login__smoke" alt="Smoke Cotización" />
      </div>

      <div className="login__data">
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
              <input
                className="input"
                name="number"
                placeholder="Nro. de doc"
              />
            </div>
            <div className="form__group1">
            <input
              className="input"
              name="phone"
              placeholder="Fecha de nacimiento"
            />
              <label>Fecha de nacimiento</label>
            </div>

        
            <input className="input" name="license" placeholder="Celular" />

            <PoliticsComponent text="Politica de Protección de Datos Personales y los Términos y Condiciones." />
            <PoliticsComponent text="Politica de Envio de Comunicaciones Comerciales." />

            <div className="form__buttom">
              <button className="button button--primary" type="submit">
                COMENCEMOS
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
