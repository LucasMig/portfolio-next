import styles from "@/app/ui/offerings-section/styles.module.scss";
import SliderSkills from "@/app/ui/slider-skills";
import SectionHeading from "@/app/ui/section-heading";

export default function OfferingsSection() {
  const heading = {
    title: "What do <span>I bring</span> to the table?",
    description:
      "I specialize in front-end and dedicate to crafting exceptional user experiences through innovative design and cutting-edge technologies",
  };

  return (
    <section className={styles.section}>
      <SectionHeading title={heading.title} description={heading.description} />
      <SliderSkills />
    </section>
  );
}
