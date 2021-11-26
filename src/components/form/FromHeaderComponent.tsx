import React from "react";

import { IFormHeaderProps } from "../../interfaces/IForm";

export const FromHeaderComponent: React.FC<IFormHeaderProps> = ({
  title,
  span,
  paragraph,
}) => {
  return (
    <div className="form__header">
      <h2 className="title">
        {title} <span>{span}</span>
      </h2>
      <p className="paragraph">{paragraph}</p>
    </div>
  );
};
