import { skills } from "../../data/data";
import SkillItem from "./SkillItem";

const Skills = () => {
  return (
    <section id="skills" className="sm:flex gap-16 mt-10">
      <SkillItem title="Frontend" skillData={skills.frontend} />
      <SkillItem title="Backend" skillData={skills.backend} />
      <SkillItem title="Other Tools" skillData={skills.tools} />
    </section>
  );
};

export default Skills;
