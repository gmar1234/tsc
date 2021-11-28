export interface ICardProps {
  onClick: (str: string) => void;
  name: string;
  price: number;
  type: string;
  classp: string;
  active: string;
}

export interface ICardBigProps {
  name: string;
}
