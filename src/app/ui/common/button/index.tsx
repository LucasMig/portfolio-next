import { type ButtonProps } from "@/app/ui/common/button/definitions";
import styles from "@/app/ui/common/button/styles.module.scss";

export default function Button({
  children,
  handleClick,
  variant = "fill",
  customStyles = {},
}: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      className={`${styles.button} ${styles[variant]}`}
      style={customStyles}
    >
      {children}
    </button>
  );
}
