import { useState } from "react";
import Logo from "./Logo";
import NavButtons from "./NavButtons";
import { Menu } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="flex justify-between items-center bg-black h-[120px] px-32 max-lg:px-8">
        <Logo />
        <div className="max-lg:hidden">
          <NavButtons />
        </div>
        <Menu
          className="lg:hidden cursor-pointer"
          onClick={toggleNavBar}
          color="#fff"
        />
      </nav>

      <div className={`overflow-hidden transition-[max-height] duration-500 bg-black ${!isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="flex flex-col items-center py-6">
          <NavButtons type="col"/>
        </nav>
      </div>
    </>
  );
}
