import styles from "@/app/ui/common/button/styles.module.scss";
import { type ButtonProps } from "@/app/ui/common/button/types";
import { Button as NUIButton } from "@nextui-org/react";

export default function Button({
  children,
  handleClick,
  variant = "fill",
  customStyles = {},
}: ButtonProps) {
  return (
    <NUIButton
      onPress={handleClick}
      className={`${styles.button} ${styles[variant]}`}
      style={customStyles}
    >
      {children}
    </NUIButton>
  );
}
