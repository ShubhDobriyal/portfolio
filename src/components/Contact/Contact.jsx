import Social from "../Social/Social";

const Contact = () => {
  return (
    <section id="contact" className="container py-24 md:py-36 text-center">
      <h5 className="mb-8 line-before justify-center after-line">Contact</h5>
      <p>
        You can mail me at{" "}
        <a
          className="block font-mohave tracking-wider text-lg text-black dark:text-white"
          href="mailto:shubhdobriyal15@gmail.com"
        >
          shubhdobriyal15@gmail.com
        </a>
      </p>
      <p className="my-8 font-mohave tracking-wider text-lg text-black dark:text-white">
        or
      </p>
      <Social classes="justify-center" />
    </section>
  );
};

export default Contact;
