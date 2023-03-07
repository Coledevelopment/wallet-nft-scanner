import styles from "./style";
import { CSSProp, CSSObject } from "styled-components";
import classNs from "../../utils/classNs";
import Image from "next/image";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text: string;
  onClick?: (event: React.FormEvent) => void;
  theme: "dark" | "light" | "primary" | "secondary" | "transparent";
  cssButton?: CSSProp | CSSObject;
  cssIcon?: CSSProp | CSSObject;
  icon?: string;
  disabled?: boolean;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  type = "button",
  text,
  onClick,
  theme = "primary",
  cssButton,
  cssIcon,
  icon,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      css={classNs(
        styles.button,
        styles[theme],
        cssButton && cssButton,
        disabled ? styles.disabled : ""
      )}
      onClick={onClick}
    >
      {icon && (
        <span css={classNs(styles.icon, cssIcon && cssIcon)}>
          <Image src={icon} layout="fill" objectFit="contain" alt={"icon"} />
        </span>
      )}
      {text}
    </button>
  );
};

export default Button;
