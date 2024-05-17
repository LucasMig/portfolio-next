import { workExperiences } from "@/app/_data/workExperiences";
import styles from "@/app/ui/experiences/styles.module.scss";
import JobAccordion from "@/app/ui/job-accordion";

const sampleJob = workExperiences[0];

export default function Experiences() {
  return (
    <div className={styles.container}>
      <JobAccordion job={sampleJob} />
    </div>
  );
}
