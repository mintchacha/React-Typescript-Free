import { Outlet } from "react-router-dom";

import Header from "./Common/Header";
import { StyledBlueButton } from "./Ui/Button";

const TypeScript = () => {
  return (
    <>
      <Header />
      <ul className="sub_header">
        <li>
          <StyledBlueButton to="./input01">tutorial</StyledBlueButton>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default TypeScript;
