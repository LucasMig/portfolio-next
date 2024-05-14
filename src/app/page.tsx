import styles from "@/app/page.module.scss";
import Hero from "@/app/ui/hero";
import OfferingsSection from "@/app/ui/offerings-section";
import ExperiencesSection from "@/app/ui/experiences-section";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <OfferingsSection />
      <ExperiencesSection />
    </main>
  );
}
