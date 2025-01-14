import { useState, useEffect } from "react";
import Logo from "./Logo";
import NavButtons from "./NavButtons";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  return (
    <>
      <nav className="flex justify-between items-center bg-white h-[120px] px-8 md:px-16 lg:px-32">
        <Logo />

        <div className="hidden lg:flex">
          <NavButtons />
        </div>
        <button
          className="lg:hidden cursor-pointer relative w-10 h-10 flex justify-center items-center"
          onClick={toggleNavBar}
        >
          <span
            className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-90 scale-0" : "rotate-0 scale-100"
              }`}
          >
            <Menu color="#2261AA" />
          </span>
          <span
            className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-0 scale-100" : "rotate-90 scale-0"
              }`}
          >
            <X color="#2261AA" />
          </span>
        </button>
      </nav>

      <div
        className={`bg-blue-900 overflow-hidden transition-all duration-500 ${isOpen ? "max-h-56" : "max-h-0"
          }`}
      >
        <nav
          className={`flex flex-col items-center py-6 transition-all ${isOpen ? "animate-fade-down" : ""
            }`}
        >
          <NavButtons type="col" />
        </nav>
      </div>


    </>
  );
}
