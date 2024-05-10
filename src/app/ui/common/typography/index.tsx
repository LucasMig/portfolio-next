import { TypographyElementMap } from "@/app/lib/constants";
import { TypographyProps } from "@/app/ui/common/typography/definitions";
import styles from "@/app/ui/common/typography/styles.module.scss";

export default function Typography({
  children,
  customStyles = {},
  variant = "text",
}: TypographyProps) {
  const Element = TypographyElementMap[variant] as keyof JSX.IntrinsicElements;

  return (
    <Element
      className={`${styles.typography} ${styles[variant]}`}
      style={customStyles}
    >
      {children}
    </Element>
  );
}
