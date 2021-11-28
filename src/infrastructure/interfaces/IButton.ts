export interface IButtonProps {
  value: "comencemos" | "continuar" | "comprar plan" | "ir a salud";
  type: "primary" | "secondary" | "disabled";
  processing: boolean;
  validate?: boolean;
  link: string;
}
