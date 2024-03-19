import { Outlet } from "react-router-dom";

import Header from "@components/Common/Header";

import { StyledBlueButton } from "../Ui/Button";

const TypeScript = () => {
  return (
    <>
      <Header />
      <ul className="sub_header">
        <li>
          <StyledBlueButton to="./issue">issue정리</StyledBlueButton>
        </li>
        <li>
          <StyledBlueButton to="./useRef">useRef</StyledBlueButton>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default TypeScript;
