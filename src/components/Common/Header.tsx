import { useState } from "react";
import { Link } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { styled } from "styled-components";

const StyledHomeIcon = styled(IoHome)`
  font-size: 2rem;
`;
const StyledCloseIcon = styled(IoMdClose)`
  font-size: 2rem;
`;

const Header = () => {
  const [headerState, setHeaderState] = useState(false);
  const headerSlide = () => {
    setHeaderState(!headerState);
  };

  const headerBg = {
    transition: "0.3s",
    opacity: headerState ? 0.3 : 0,
    transform: headerState ? "translate(0%)" : "translate(100%)",
  };

  return (
    <>
      <button className="navbtn" onClick={headerSlide}>
        <GrMenu />
      </button>
      <header className={headerState ? "on" : "off"}>
        <button className="closebtn" onClick={headerSlide}>
          <StyledCloseIcon />
        </button>
        <h1>
          <Link to="/2024">
            <StyledHomeIcon />
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/2024/inputs">Hooks</Link>
          </li>
          <li>
            <Link to="/2024/typescript">Typescript</Link>
          </li>
          <li>
            <Link to="/2024/game">Game</Link>
          </li>
        </ul>
      </header>
      <div className="header-bg" style={headerBg} onClick={headerSlide}></div>
    </>
  );
};

export default Header;
