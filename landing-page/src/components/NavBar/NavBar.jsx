import { useState, useEffect } from "react";
import Logo from "./Logo";
import NavButtons from "./NavButtons";
import { Menu } from "lucide-react";

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
        <Menu
          className="lg:hidden cursor-pointer"
          onClick={toggleNavBar}
          color="#2261AA"
        />
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
