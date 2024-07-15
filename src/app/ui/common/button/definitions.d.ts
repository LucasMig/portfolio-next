export interface ButtonProps {
  children: React.ReactNode;
  handleClick?: () => void;
  variant?: "outline" | "fill";
  customStyles?: React.CSSProperties;
}
