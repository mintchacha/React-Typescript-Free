import { Outlet } from "react-router-dom";

import Header from "./Common/Header";
import { StyledBlueButton } from "./Ui/Button";

const Application = () => {
  return (
    <div>
      <Header />
      <ul className="sub_header">
        <li>
          <StyledBlueButton to="./Calendar01">Calendar01</StyledBlueButton>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Application;
