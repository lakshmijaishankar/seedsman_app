import { FC } from "react";
import AsideComponent from "./Aside.component";
import { AsideContainerType } from "./Aside.type";

const AsideContainer: FC<AsideContainerType> = ({ children }) => {
  return <AsideComponent childern={children} />;
};
export default AsideContainer;
