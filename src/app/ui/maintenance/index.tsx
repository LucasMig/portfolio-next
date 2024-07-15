import { Typography } from "@/app/ui/common";
import styles from "@/app/ui/maintenance/styles.module.scss";
import { FaGhost, FaTools } from "react-icons/fa";

function Maintenance({
  notFound = false,
  customMessage,
}: {
  notFound?: boolean;
  customMessage?: string;
}) {
  return (
    <section className={styles.container}>
      <div className={styles.icon}>
        <div>{notFound ? <FaGhost /> : <FaTools />}</div>
      </div>
      <div className={styles.textContainer}>
        <Typography variant="subTitle" customStyles={{ textAlign: "center" }}>
          {notFound ? "Nothing to see here..." : "Under Maintenance"}
        </Typography>
        <Typography variant="text" customStyles={{ textAlign: "center" }}>
          {notFound
            ? "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
            : (customMessage ??
              "This page is currently under maintenance. Please check back later.")}
        </Typography>
      </div>
    </section>
  );
}

export default Maintenance;
