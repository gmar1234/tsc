import { Link } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";
import { IFormTopProps } from "../../../infrastructure/interfaces/IForm";

export const FormTopComponent: React.FC<IFormTopProps> = ({ step, link }) => {
  return (
    <div className="form__top">
      <Link to={link}>
        <BsArrowLeftCircle />
      </Link>{" "}
      <span>PASO {step} DE</span> 7
    </div>
  );
};
