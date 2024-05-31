import ProjectCard from "src/components/projects/projects";
import data from '../data/projects';
import { Stack } from "react-bootstrap";

export default function ProjectsPage() {
  return (
    <div>
      <h2>Projects</h2>
      <div className="projectsContainer">
        {data.map((d, k) => <ProjectCard {...d} key={`proj_${k}`} />)}
      </div>
    </div>
  );
}