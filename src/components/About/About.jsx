import Skills from "../Skills/Skills";

const About = () => {
  return (
    <section id="about" className="container pt-14 pb-14">
      <h5 className="mb-8 line-before">About</h5>
      <div className="text-sm md:text-lg tracking-wide md:tracking-wider ">
        <p>
          Hi, my name is Shubham Dobriyal and I am a Senior Software
          Engineer(just a tag, more sort of Full-stack web developer) at
          Grazitti. In 2019 during the last year of my college I joined Grazitti
          as a intern and after 3 months of internship was offered a fulltime
          job for Software Engineer role.
        </p>
        <p>
          {" "}
          During my journey with Grazitti I have worked for wide range of
          clients. You dont’t want to read more, I know, so let me put a list of
          technologies that I have worked on -{" "}
        </p>
      </div>
      <Skills />
    </section>
  );
};

export default About;
