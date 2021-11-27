import React from "react";

interface IPolitics {
  text: string;
}

type Props = IPolitics;

export const PoliticsText = ({ text }: { text: string }) => {
  return (
    <a href="!#" className="link">
      {text}
    </a>
  );
};

const PoliticsComponent: React.FC<Props> = ({ text }) => {
  return (
    <label className="checkbox">
      <p className="checkbox__text m-left-14">
        Acepto la <PoliticsText text={text} />
      </p>
      <input type="checkbox" />
      <span className="checkbox__box"></span>
    </label>
  );
};

export default PoliticsComponent;
