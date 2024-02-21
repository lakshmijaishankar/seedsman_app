import { FC } from "react";
import NavbarContainer from "../navbar/Navbar.container";
import { HeaderComponentProps } from "./Header.type";
import "./Header.css";

const HeaderComponent: FC<HeaderComponentProps> = ({ headerFixed }) => {
  return (
    <header className={`header_wrapper_container ${headerFixed}`}>
      <NavbarContainer />
    </header>
  );
};

export default HeaderComponent;
