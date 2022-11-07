import Social from "../Social/Social";
import HandIcon from "./../../assets/icons/openmoji_waving-hand.svg";
const Header = () => {
  return (
    <header className=" min-h-[calc(100vh-78px)] grid items-center">
      <div className="container relative">
        <h1 className="text-4xl font-mohave text-black dark:text-white mb-2 flex items-center">
          <img src={HandIcon} alt="" /> Hi
        </h1>
        <h2 className="font-mohave text-3xl mb-2">
          my name is{" "}
          <span className="text-black dark:text-white">Shubham Dobriyal</span>
        </h2>
        <div className="mb-16">
          <h3 className="inline md:block text-xl">I am a Web developer </h3>
          <h3 className="inline md:block text-xl">
            currently working at{" "}
            <a
              className="underline-link text-black dark:text-white relative inline-block"
              href="https://www.grazitti.com/"
              target="_blank"
            >
              Grazitti Interactive
            </a>
          </h3>
        </div>
        <Social />
        <div className="absolute bottom-8 right-0 translate-x-1/3 rotate-90  hidden lg:block ">
          <a
            href="mailto:shubhdobriyal15@gmail.com"
            className="before-line font-mohave font-normal text-lg text-accent relative flex items-center"
          >
            shubhdobriyal15@gmail.com
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
