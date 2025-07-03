import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "work", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 0; // Adjust this value if you need some offset from the top
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = sectionTop - startPosition - offset;
      const duration = 1000; // Duration in milliseconds
      let start = null;

      function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const easeInOutCubic = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startPosition + distance * easeInOutCubic);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }

      requestAnimationFrame(animation);
    }
  };

  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a 
          className={`nav-link ${activeSection === "home" ? "active" : ""}`} 
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          Home
        </a>
      </li>
      <li className="nav-li">
        <a 
          className={`nav-link ${activeSection === "about" ? "active" : ""}`} 
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
        >
          About
        </a>
      </li>
      <li className="nav-li">
        <a 
          className={`nav-link ${activeSection === "work" ? "active" : ""}`} 
          href="#work"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("work");
          }}
        >
          Work
        </a>
      </li>
      <li className="nav-li">
        <a 
          className={`nav-link ${activeSection === "contact" ? "active" : ""}`} 
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="#home"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              const homeSection = document.getElementById("home");
              if (homeSection) {
                const offset = 0;
                const sectionTop = homeSection.getBoundingClientRect().top + window.pageYOffset;
                const startPosition = window.pageYOffset;
                const distance = sectionTop - startPosition - offset;
                const duration = 1000;
                let start = null;

                function animation(currentTime) {
                  if (start === null) start = currentTime;
                  const timeElapsed = currentTime - start;
                  const progress = Math.min(timeElapsed / duration, 1);
                  const easeInOutCubic = progress < 0.5
                    ? 4 * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;

                  window.scrollTo(0, startPosition + distance * easeInOutCubic);

                  if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                  }
                }

                requestAnimationFrame(animation);
              }
            }}
          >
            ArYaN | Portfolio
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
