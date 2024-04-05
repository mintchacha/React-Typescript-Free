import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "@components/Common/Header";

import { StyledBlueButton } from "../Ui/Button";

const TypeScript = () => {
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

  const [cateName, setCateName] = useState("issue정리");

  const toggleActive = (e: any) => {
    e.target.classList.toggle("active");
    const menus = document.querySelector(".sub-menu") as HTMLElement;
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
        <ul className="sub-menu">
          <li>
            <StyledBlueButton
              to="./issue"
              onClick={() => setCateName("issue정리")}
            >
              issue정리
            </StyledBlueButton>
          </li>
          <li>
            <StyledBlueButton
              to="./useRef"
              onClick={() => setCateName("useRef")}
            >
              useRef
            </StyledBlueButton>
          </li>
          <li>
            <StyledBlueButton
              to="./useState"
              onClick={() => setCateName("useState")}
            >
              useState
            </StyledBlueButton>
          </li>
          <li>
            <StyledBlueButton
              to="./useEffect"
              onClick={() => setCateName("useEffect")}
            >
              useEffect
            </StyledBlueButton>
          </li>
        </ul>
        <p>home &gt; TypeScript &gt; {cateName}</p>
      </div>
      <Outlet />
    </>
  );
};

export default TypeScript;
