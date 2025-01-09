import { type CardProps } from "@/app/ui/card/definitions";
import styles from "@/app/ui/card/styles.module.scss";
import { Typography } from "../common";

export default function Card({ icon, title, description }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <div>{icon}</div>
      </div>
      <Typography variant="cardTitle">{title}</Typography>
      <Typography variant="text" size="tiny">
        {description}
      </Typography>
    </div>
  );
}
