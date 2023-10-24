interface Head {
  [key: string]: string;
}

interface Link {
  [key: string]: string;
}

interface Project {
  head: Head;
  name: string;
  techStack: string[];
  imagePath: string;
  title: string;
  description: string;
  links: Link[];
  htmlPageContent: string;
}
