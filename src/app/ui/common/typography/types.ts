export interface TypographyProps {
  children: React.ReactNode;
  customStyles?: React.CSSProperties;
  variant?: "title" | "subTitle" | "cardTitle" | "jobTitle" | "text" | "span";
  size?: "tiny" | "normal" | "medium" | "large";
  invertTextColor?: boolean;
}
