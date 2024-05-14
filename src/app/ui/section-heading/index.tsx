import { Typography } from "@/app/ui/common";
import { SectionHeadingProps } from "@/app/ui/section-heading/definitions";
import parse from "html-react-parser";

export default function SectionHeading({
  title,
  description,
}: SectionHeadingProps) {
  return (
    <>
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
    </>
  );
}
