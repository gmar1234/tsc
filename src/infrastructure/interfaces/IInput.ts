export interface IInputProps {
  onChange: (arg0: any) => void;
  name: string;
  value?: string;
  label: string;
  maxValidation?: number;
  type: string;
  union?: boolean;
}
