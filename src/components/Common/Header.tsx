import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { styled } from "styled-components";

const StyledHomeIcon = styled(IoHome)`
  font-size: 28px;
`;

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">
          <StyledHomeIcon />
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/inputs">Hooks</Link>
        </li>
        <li>
          <Link to="/typescript">Typescript</Link>
        </li>
        <li>
          <Link to="/game">Game</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
