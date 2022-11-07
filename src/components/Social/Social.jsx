import {
  SlSocialGithub,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";

const Social = (props) => {
  return (
    <div className={`flex items-center gap-5 ${props.classes}`}>
      <a
        className="text-accent text-xl relative group "
        href="https://www.instagram.com/_shubhii_15/"
        target="_blank"
      >
        <p className="hidden md:block -translate-y-3 transition ease font-cursive opacity-0 group-hover:opacity-100 group-hover:translate-y-0 down-arrow absolute bg-black text-white text-sm w-44 rounded py-1 px-2 -top-[calc(100%+5px)] text-center">
          Follow me on Instagram
        </p>
        <SlSocialInstagram className="mt-1" />
      </a>
      <a
        className="text-accent text-xl relative group "
        href="https://www.linkedin.com/in/shubhdobriyal15/"
        target="_blank"
      >
        <p className="hidden md:block -translate-y-3 transition ease font-cursive opacity-0 group-hover:opacity-100 group-hover:translate-y-0 down-arrow absolute bg-black text-white text-sm w-40 rounded py-1 px-2 -top-[calc(100%+10px)] text-center">
          Follow me on Linkedin
        </p>
        <SlSocialLinkedin />
      </a>
      <a
        className="text-accent text-xl relative group "
        href="https://twitter.com/Codeta5/followers"
        target="_blank"
      >
        <p className="hidden md:block -translate-y-3 transition ease font-cursive opacity-0 group-hover:opacity-100 group-hover:translate-y-0 down-arrow absolute bg-black text-white text-sm w-40 rounded py-1 px-2 -top-[calc(100%+8px)] text-center">
          Follow me on Twitter
        </p>
        <SlSocialTwitter />
      </a>
      <a
        className="text-accent text-xl relative group "
        href="https://github.com/ShubhDobriyal"
        target="_blank"
      >
        <p className="hidden md:block -translate-y-3 transition ease font-cursive opacity-0 group-hover:opacity-100 group-hover:translate-y-0 down-arrow absolute bg-black text-white text-sm w-40 rounded py-1 px-2 -top-[calc(100%+12px)] text-center">
          Follow me on Github
        </p>
        <SlSocialGithub />
      </a>
    </div>
  );
};

export default Social;
