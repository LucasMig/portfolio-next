import { FaTools } from "react-icons/fa";
import styles from "@/app/ui/maintenance/styles.module.scss";
import { Typography } from "@/app/ui/common";

function Maintenance() {
  return (
    <section className={styles.container}>
      <div className={styles.icon}>
        <div>
          <FaTools />
        </div>
      </div>
      <div className={styles.textContainer}>
        <Typography variant="subTitle" customStyles={{ textAlign: "center" }}>
          Under Maintenance
        </Typography>
        <Typography variant="text" customStyles={{ textAlign: "center" }}>
          This page is currently under maintenance. Please check back later.
        </Typography>
      </div>
    </section>
  );
}

export default Maintenance;
