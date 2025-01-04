import { ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
}

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-500",
};
const defaultStyles = "rounded-md flex gap-1";

const sizeStyles = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-4 px-6",
};

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${variantStyles[props.variant]} ${defaultStyles} ${
        sizeStyles[props.size]
      }`}
    >
      {props.startIcon ? <div>{props.startIcon}</div> : null} {props.text}{" "}
      {props.endIcon}
    </button>
  );
};

export default Button;
