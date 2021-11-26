import React from "react";
import { IAccordeonProps } from "../../interfaces/IAccordeon";
import { IAccordeonContainerProps } from "../../interfaces/IAccordeon";

export const AcordeonItem: React.FC<IAccordeonProps> = ({
  primary,
  title,
  content,
  classp,
}) => {
  return (
    <div className={classp}>
      <input type="checkbox" id={`plan-${primary}`} />
      <label className={`${classp}__label`} htmlFor={`plan-${primary}`}>
        {title}
      </label>
      <div className={`${classp}__content`}>{content}</div>
    </div>
  );
};

export const AcordeonComponent: React.FC<IAccordeonContainerProps> = ({
  children,
}) => {
  return (
    <div className="gm-accordion">
      <div className="gm-accordion__tabs">{children}</div>
    </div>
  );
};
