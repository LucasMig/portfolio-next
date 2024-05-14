import styles from "@/app/page.module.scss";
import Hero from "@/app/ui/hero";
import SectionOfferings from "@/app/ui/section-offerings";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <SectionOfferings />
    </main>
  );
}
