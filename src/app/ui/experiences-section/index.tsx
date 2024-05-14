import styles from "@/app/ui/experiences-section/styles.module.scss";
import SectionHeading from "@/app/ui/section-heading";

export default function ExperiencesSection() {
  const heading = {
    title: "My work <span>Experience</span>",
    description:
      "A comprehensive overview of my professional journey, the projects I have worked on, and the skills I've honed as a developer",
  };

  return (
    <section className={styles.section}>
      <SectionHeading title={heading.title} description={heading.description} />
    </section>
  );
}
