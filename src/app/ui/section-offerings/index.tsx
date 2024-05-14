import styles from "@/app/ui/section-offerings/styles.module.scss";
import Typography from "@/app/ui/common/typography";
import SliderSkills from "@/app/ui/slider-skills";

export default function SectionOfferings() {
  return (
    <section className={styles.section}>
      <Typography
        variant="subTitle"
        customStyles={{
          textAlign: "center",
        }}
      >
        What can <span>I bring</span> to the table?
      </Typography>
      <Typography
        variant="text"
        customStyles={{
          textAlign: "center",
        }}
      >
        I specialize in front-end and dedicate to crafting exceptional user
        experiences through innovative design and cutting-edge technologies
      </Typography>
      <SliderSkills />
    </section>
  );
}
