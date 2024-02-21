import { useEffect, useState } from "react";
import HeaderComponent from "./Header.component";

const HeaderContainer = () => {
  const [headerFixed, setHeaderFixed] = useState<string>("");
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollPos < currentScrollPos) {
        // Scrolling down
        setHeaderFixed("header_navbar_fixed_up");
      } else {
        // Scrolling up
        setHeaderFixed("header_navbar_fixed_down");
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  return <HeaderComponent headerFixed={headerFixed} />;
};
export default HeaderContainer;
