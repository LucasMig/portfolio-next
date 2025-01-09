import styles from "@/app/ui/common/tag/styles.module.scss";
import { Chip as NUIChip } from "@nextui-org/react";

const colorSets = ["a", "b", "c"];

export default function Tag({
  children,
  colorSet,
}: {
  children: string;
  colorSet?: "a" | "b" | "c";
}) {
  return (
    <NUIChip
      className={`${styles.tag} ${styles[`color-set-${colorSet || colorSets.at(Math.floor(Math.random() * colorSets.length))}`]}`}
    >
      {children}
    </NUIChip>
  );
}
