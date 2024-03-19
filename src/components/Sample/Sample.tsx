import { Outlet } from "react-router-dom";

import Header from "../Common/Header";
import { StyledBlueButton, StyledRedButton } from "../Ui/Button";

const Inputs = () => {
  return (
    <>
      <Header />
      <ul className="sub_header">
        <li>
          <StyledBlueButton to="./input01">Input01</StyledBlueButton>
        </li>
        <li>
          <StyledBlueButton to="./input02/1">02</StyledBlueButton>
        </li>
        <li>
          <StyledRedButton to="ss">aaa</StyledRedButton>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Inputs;
