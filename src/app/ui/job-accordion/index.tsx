import { formatDate } from '@/app/lib/utils';
import { Tag, Typography } from '@/app/ui/common';
import styles from '@/app/ui/job-accordion/styles.module.scss';
import { type JobAccordionProps } from '@/app/ui/job-accordion/types';
import parse from 'html-react-parser';

export default function JobAccordion({
  job,
  isOpen = false,
}: JobAccordionProps) {
  const { company, title, location, startDate, endDate, tags, showcase } = job;

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        {/* <FaChevronRight /> */}
        <div className={styles.header}>
          <div className={styles.heading}>
            <Typography variant="jobTitle">{title},</Typography>
            <Typography variant="jobTitle" invertTextColor>
              {company}
            </Typography>
            <div className={styles.subHeading}>
              <Typography variant="text">{`${formatDate(startDate)} — ${
                endDate ? formatDate(endDate) : 'Present'
              }`}</Typography>
            </div>
          </div>
        </div>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
      </div>
      <div
        className={`${styles.body} ${styles[`${isOpen ? 'open' : 'closed'}`]}`}
      >
        <div className={styles.showcase}>
          <p>{parse(showcase.description)}</p>
          <div className={styles.images}>
            {showcase.images.map((image, index) => (
              <img key={index} src={image} alt="Showcase" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
