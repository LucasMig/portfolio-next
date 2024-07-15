import { TypographyProps } from "@/app/ui/common/typography/definitions";
import styles from "@/app/ui/common/typography/styles.module.scss";

const TypographyElementMap = {
  title: "h1",
  subTitle: "h2",
  cardTitle: "h3",
  jobTitle: "h3",
  text: "p",
  span: "span",
};

export default function Typography({
  children,
  customStyles = {},
  variant = "text",
  size = "normal",
  invertTextColor = false,
}: TypographyProps) {
  const Element = TypographyElementMap[variant] as keyof JSX.IntrinsicElements;

  return (
    <Element
      className={`${styles.typography} ${styles[variant]} ${styles[size]} ${
        styles[invertTextColor ? "invColor" : "defColor"]
      }`}
      style={customStyles}
    >
      {children}
    </Element>
  );
}
