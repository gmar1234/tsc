export interface ISelectProps {
  onChange: (arg0: any) => void;
  name: string;
  value: string;
  endMaxValidation?: number;
  firstMaxValidation?: number;
  items: Array<Type>;
}

interface Type {
  value: string;
  code: string;
}
