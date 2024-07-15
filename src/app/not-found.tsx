import Maintenance from "@/app/ui/maintenance";
import styles from "@/app/page.module.scss";

export default function NotFound() {
  return (
    <div className={styles.main}>
      <Maintenance notFound={true} />
    </div>
  );
}
