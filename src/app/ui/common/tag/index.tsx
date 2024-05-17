import styles from "@/app/ui/common/tag/styles.module.scss";

export default function Tag({ children }: { children: string }) {
  return <span className={styles.tag}>{children}</span>;
}
