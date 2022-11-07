import { Link } from "react-scroll";

const NavItem = ({ title, slug, navToggle }) => {
  const navLinkHandler = () => {
    navToggle();
  };

  return (
    <li>
      <Link
        activeClass="active"
        to={slug}
        spy={true}
        smooth={true}
        offset={-100}
        className="flex relative after:content-[''] after:w-full after:h-0 after:bg-accent after:opacity-30 after:block after:absolute after:bottom-1 hover:after:h-2 after:transition-all text-3xl sm:text-sm cursor-pointer lowercase"
        onClick={navLinkHandler}
      >
        {title}
        <span className="text-accent text-sm">.</span>
      </Link>
    </li>
  );
};

export default NavItem;
