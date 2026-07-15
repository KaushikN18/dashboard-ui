import ProjectCard from "./ProjectCard";
import projects from "./projectData";

function ProjectGrid() {
  return (
    <div className="grid grid-cols-3 gap-6 mt-8">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;