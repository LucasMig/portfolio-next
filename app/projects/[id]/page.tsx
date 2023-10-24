import React from "react";

import { getAllProjectsIds, getProjectData } from "@/lib/projects";

// interface Project {
//   head: {
//     [key: string]: string;
//   };
//   name: string;
//   techStack: string[];
//   imagePath: string;
//   title: string;
//   description: string;
//   links: Array<{ [key: string]: string }>;
//   htmlPageContent: string;
// }

export async function generateStaticParams() {
  const paths = getAllProjectsIds();

  return paths;
}

async function getProject(params: { id: string }) {
  console.log(params);
  const projectData = await getProjectData(params.id);

  return projectData;
}

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const projectData = await getProject(params);

  console.log(projectData);

  return projectData ? <div>project page</div> : null;
}
