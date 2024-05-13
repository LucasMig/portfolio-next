export interface TypographyProps {
  children: React.ReactNode;
  customStyles?: React.CSSProperties;
  variant?: "title" | "subTitle" | "text" | "span";
  size?: "tiny" | "normal" | "medium" | "large";
  invertTextColor?: boolean;
}
