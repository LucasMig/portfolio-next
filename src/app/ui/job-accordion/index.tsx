import { formatDate } from "@/app/lib/utils";
import { Tag, Typography } from "@/app/ui/common";
import { type JobAccordionProps } from "@/app/ui/job-accordion/definitions";
import styles from "@/app/ui/job-accordion/styles.module.scss";

export default function JobAccordion({
  job,
  isOpen = false,
}: JobAccordionProps) {
  const {
    company,
    title: _title,
    location,
    startDate,
    endDate,
    tags,
    showcase,
  } = job;

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <div className={styles.header}>
          <div className={styles.heading}>
            <Typography variant="jobTitle">{company},</Typography>
            <Typography variant="jobTitle" invertTextColor>
              {location}
            </Typography>
          </div>
          <div className={styles.subHeading}>
            <Typography variant="text">{`• ${formatDate(startDate)} - ${
              endDate ? formatDate(endDate) : "Present"
            }`}</Typography>
          </div>
        </div>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className={styles.body}>
          <div className={styles.showcase}>
            <p>{showcase.description}</p>
            <div className={styles.images}>
              {showcase.images.map((image, index) => (
                <img key={index} src={image} alt="Showcase" />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
