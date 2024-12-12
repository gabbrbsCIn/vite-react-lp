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
      <nav className="flex justify-between items-center bg-black h-[120px] px-32 max-lg:px-8">
        <Logo />
        <div className={`max-lg:hidden`} >
          <NavButtons />
        </div>
        <Menu
          className="lg:hidden cursor-pointer"
          onClick={toggleNavBar}
          color="#fff"
        />
      </nav>
      <div className={`bg-black overflow-hidden transition-all duration-500  ${isOpen ? 'max-h-56' : 'max-h-0'}`}>
        <nav className={`flex flex-col transition ${isOpen ? 'animate-fade-down' : ''} items-center py-6`}>
          <NavButtons type="col" />
        </nav>
      </div>

    </>
  );
}
