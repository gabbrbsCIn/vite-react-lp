import { useState } from "react";
import NavBar from "../src/components/navBar/NavBar";
import NavButtons from "./components/NavBar/NavButtons";
import Logo from "./components/NavBar/Logo";
import Button from "./components/common/Button";
function App() {
  return (
    <>
      <NavBar>
        <Logo />
        <NavButtons>
          <Button title="Home" />
          <Button title="About us" />
          <Button title="Services" />
          <Button title="Portfolio" />
          <Button title="Pages" />
          <Button title="Contact us" />
        </NavButtons>
      </NavBar>
    </>
  );
}

export default App;
