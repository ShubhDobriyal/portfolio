import { FiArrowRight } from "react-icons/fi";
import { projects } from "../../data/data";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <section id="projects" className="container pt-20 pb-8">
      <h5 className="mb-12 line-before">Projects</h5>
      <div>
        {projects.map((project, index) => {
          return <ProjectItem key={index} project={project} index={index} />;
        })}
      </div>
      <div>
        <a
          className="flex items-center justify-center underline text-md font-medium text-accent font-mohave"
          href="https://github.com/ShubhDobriyal"
          target="_blank"
        >
          View All <FiArrowRight />
        </a>
      </div>
    </section>
  );
};

export default Projects;
