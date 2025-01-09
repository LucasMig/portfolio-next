export interface JobAccordionProps {
  job: Job;
  isOpen?: boolean;
}

export interface Job {
  company: string;
  title: string;
  location: string;
  startDate: Date;
  endDate: Date | null;
  tags: string[];
  showcase: {
    images: string[];
    description: string;
  };
}
