import { useState } from "react";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { navItems } from "../../../data/data";
import NavItem from "./NavItem";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openNavbar = () => {
    setShowMenu(true);
  };
  const closeNavbar = () => {
    setShowMenu(false);
  };
  const menuVisibilityClass = showMenu ? "" : "hidden";
  const menuPosition = showMenu ? "static" : "sticky";

  const NavItems = navItems.map((navItem) => (
    <NavItem
      key={navItem.id}
      title={navItem.title}
      navToggle={closeNavbar}
      slug={navItem.slug}
    />
  ));

  return (
    <nav
      className={`py-5 top-0 w-full z-20 sticky before:content-[''] before:top-0 before:bg-white/80 before:dark:bg-bgColor/80 before:absolute before:w-full before:h-full before:backdrop-blur`}
    >
      <div className="container w-full mx-auto relative flex items-center justify-between">
        <h2 className="text-accent font-mohave font-bold text-2xl">SD</h2>
        <button className="md:hidden" onClick={openNavbar}>
          <HiBars3BottomRight className="text-2xl" />
        </button>
        <div
          className={`${menuVisibilityClass} md:block transition-all ease-in-out fixed z-30 md:static left-0 top-0  h-full md:h-auto w-full md:w-auto text-text  dark:text-textGray py-5 px-3 sm:p-0 bg-white/80 dark:bg-bgColor/80 md:bg-transparent md:dark:bg-transparent backdrop-blur`}
        >
          <div className="flex items-start justify-end md:hidden">
            <button onClick={closeNavbar}>
              <HiXMark className="text-2xl" />
            </button>
          </div>
          <ul className="md:flex items-center gap-4 w-auto">{NavItems}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
