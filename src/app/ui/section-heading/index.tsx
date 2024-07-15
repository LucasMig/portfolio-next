import parse from "html-react-parser";
import { Typography } from "@/app/ui/common";
import { type SectionHeadingProps } from "@/app/ui/section-heading/definitions";
import styles from "@/app/ui/section-heading/styles.module.scss";

export default function SectionHeading({
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className={styles.heading}>
      <Typography
        variant="subTitle"
        customStyles={{
          textAlign: "center",
        }}
      >
        {parse(title)}
      </Typography>
      <Typography
        variant="text"
        customStyles={{
          textAlign: "center",
        }}
      >
        {parse(description)}
      </Typography>
    </div>
  );
}
