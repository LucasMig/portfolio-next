import fs from "fs";
import path from "path";

const projectsDir = path.join(process.cwd(), "projects");

export function getAllProjectsIds() {
  const fileNames = fs.readdirSync(projectsDir);

  return fileNames.map((fileName) => ({
    id: fileName.replace(/\.json$/, ""),
  }));
}

export function getProjectData(id: string) {
  const fullPath = path.join(projectsDir, `${id}.json`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const parsedResults = JSON.parse(fileContents);

  return {
    id,
    ...parsedResults,
  };
}
