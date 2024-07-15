"use client";

import styles from "@/app/page.module.scss";
import ExperiencesSection from "@/app/ui/experiences-section";
import Hero from "@/app/ui/hero";
import Maintenance from "@/app/ui/maintenance";
import OfferingsSection from "@/app/ui/offerings-section";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const newValue = window.innerWidth < 400;
    setIsMobile(newValue);
  }, []);

  return (
    <main className={styles.main}>
      <Hero />
      {isMobile ? (
        <>
          <OfferingsSection />
          <ExperiencesSection />
        </>
      ) : (
        <Maintenance customMessage="If you are seeing this message, it means that the desktop version of the website is not ready yet. Please use a mobile device to view the website." />
      )}
    </main>
  );
}
