export interface TypographyProps {
  children: React.ReactNode;
  customStyles?: React.CSSProperties;
  variant?: "title" | "subTitle" | "cardTitle" | "text" | "span";
  size?: "tiny" | "normal" | "medium" | "large";
  invertTextColor?: boolean;
}
