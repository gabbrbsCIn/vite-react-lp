import { useState } from "react";
import Logo from "./Logo";
import NavButtons from "./NavButtons";
import { Menu } from 'lucide-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="flex justify-between items-center bg-black h-[120px] px-32 max-lg:px-8">
      <Logo />
      <div className="max-lg:hidden">
        <NavButtons />
      </div>
      <div className="lg:hidden">
        <Menu color="#fff"/>
      </div>
    </nav>
  )
}
