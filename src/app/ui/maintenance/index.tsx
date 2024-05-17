import { FaGhost, FaTools } from "react-icons/fa";
import styles from "@/app/ui/maintenance/styles.module.scss";
import { Typography } from "@/app/ui/common";

function Maintenance({ notFound = false }: { notFound?: boolean }) {
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
            : "This page is currently under maintenance. Please check back later."}
        </Typography>
      </div>
    </section>
  );
}

export default Maintenance;
