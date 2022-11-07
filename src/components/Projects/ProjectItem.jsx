import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectItem = ({ project, index }) => {
  const orderClass = `order-${index % 2 == 0 ? "0" : "1 right-0"}`;
  const marginClass = index % 2 == 0 ? "ml-auto" : "";

  return (
    <div
      key={project.id}
      className="md:flex mb-8 md:mb-32 relative md:min-h-[22rem]"
    >
      <img
        className={`hidden md:block rounded md:absolute md:w-6/12 h-full object-cover ${orderClass}`}
        src={project.img}
        alt={project.title}
      />
      <div
        className={`md:w-3/5 text-textGray pt-12 pb-6  px-7 md:translate-y-10  bg-bgColor dark:bg-cardBgColor rounded ${marginClass}`}
      >
        <div>
          <h4 className="text-2xl font-mohave tracking-wide ">
            {project.title}
          </h4>
          <a className="text-dimGray text-xs" href={project.links.demo}>
            {project.links.demo}
          </a>
          <p className="mt-6">{project.desc}</p>
          <ul className="flex gap-4 uppercase font-mohave text-xs text-accent mt-5">
            {project.tech.map((techItem, index) => {
              return <li key={index}>{techItem}</li>;
            })}
          </ul>
        </div>
        <div className=" flex justify-end gap-3 mt-4">
          <a href={project.links.github}>
            <FiGithub />
          </a>
          <a href={project.links.demo}>
            <FiExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
