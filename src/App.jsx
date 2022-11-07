import { useContext } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import ThemeContext from "./store/theme-context";

import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Navbar from "./components/Layout/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

const App = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <div className={`${themeCtx.theme} relative`}>
      <main>
        <Navbar />
        <Header />
        <Projects />
        <About />
        <Blog />
        <Contact />
      </main>
      <button
        onClick={themeCtx.switchTheme}
        className="fixed dark:bg-bgColor bg-white border border-dimGray dark:border-cardBgColor dark:text-white shadow-xl rounded-full p-3 bottom-2 md:bottom-8 right-2 md:right-8"
      >
        {themeCtx.theme !== "dark" ? (
          <BsMoon className="h-6 w-6 " />
        ) : (
          <BsSun className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};

export default App;
