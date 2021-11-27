import {
  MdSecurity,
  MdPhoneIphone,
  MdOutlineMoney,
  MdOutlineLocalHospital,
} from "react-icons/md";
import Smoke from "../../assets/img/smoke.png";

export const LeftContainerComponent = () => {
  return (
    <div className="gm-container__left">
      <div className="clip-path"></div>
      <div className="gm-container__left--text">
        <h2 className="gm-container__left--title ">
          Seguro de <br />
          <span className="font-bold">Salud</span>
        </h2>
        <div className="gm-container__left--list">
          <ul>
            <li>
              <MdSecurity /> Cómpralo de manera facil y rápida
            </li>
            <li>
              <MdPhoneIphone /> Cotiza y compra tu seguro 100% digital
            </li>
            <li>
              <MdOutlineMoney /> Hasta S/. 12 millones de cobertura anual
            </li>
            <li>
              <MdOutlineLocalHospital />
              Más de 300 clínicas en todo el Perú
            </li>
          </ul>
        </div>
      </div>
      <p className="gm-container__left--footer">&copy; 2021 RIMAC y Company</p>
      <img
        src={Smoke}
        className="gm-container__left--smoke"
        alt="Smoke Cotización"
      />
    </div>
  );
};
