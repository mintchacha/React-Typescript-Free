import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Common/Header";
import { StyledBlueButton, StyledRedButton } from "../Ui/Button";

const Inputs = () => {
  const IS_MOBILE = !matchMedia("screen and (min-width: 768px)").matches;
  const [isMobile, setIsMobile] = useState(IS_MOBILE);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [cateName, setCateName] = useState("Input01");

  const toggleActive = (e: any) => {
    e.target.classList.toggle("active");
    const menus = e.target.nextElementSibling;
    const menuCount = menus.childElementCount;
    if (e.target.classList.contains("active")) {
      menus.style.height = `calc(2.85rem * ${menuCount})`;
    } else {
      menus.style.height = `0`;
    }
  };
  return (
    <>
      <Header />
      <div className="sub_header">
        {isMobile ? (
          <div className="select-menu" onClick={toggleActive}>
            {cateName}
          </div>
        ) : null}
        <ul>
          <li>
            <StyledBlueButton
              to="./input01"
              onClick={() => setCateName("Input01")}
            >
              Input01
            </StyledBlueButton>
          </li>
          <li>
            <StyledBlueButton
              to="./input02/1"
              onClick={() => setCateName("Input02")}
            >
              02
            </StyledBlueButton>
          </li>
          <li>
            <StyledRedButton to="ss">aaa</StyledRedButton>
          </li>
        </ul>
        <p>home &gt; TypeScript &gt; {cateName}</p>
      </div>
      <Outlet />
    </>
  );
};

export default Inputs;
