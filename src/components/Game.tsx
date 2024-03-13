import { Outlet } from "react-router-dom";

import Header from "./Common/Header";
import { StyledBlueButton } from "./Ui/Button";

const Game = () => {
  return (
    <>
      <Header />
      <ul className="sub_header">
        <li>
          <StyledBlueButton to="./Game1">무기 강화하기</StyledBlueButton>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Game;
