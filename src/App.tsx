import BannerContainer from "./banner/Banner.container";
import MainContainer from "./main/Main.container";
import HeaderContainer from "./header/Header.container";

import "./styles/index.css";

function App() {
  return (
    <>
      <HeaderContainer />
      <BannerContainer />
      <MainContainer />
    </>
  );
}

export default App;
