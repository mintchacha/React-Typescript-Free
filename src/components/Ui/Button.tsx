import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledLink = styled(Link)`
  display: block;
  color: #333;
  font-weight: bold;
  padding: 0.625rem 1rem;
  border: 0;
  border-radius: 10px;
  box-sizing: border-box;
  outline: 0;
  transition: 0.3s;
`;

const StyledBlueButton = styled(StyledLink)`
  background-color: #2df9fc;
  &:hover,
  &focus {
    color: #333;
    background-color: #31bbbd;
  }
`;
const StyledRedButton = styled(StyledLink)`
  color: #fff;
  background-color: #e13232;
  &:hover,
  &focus {
    color: #fff;
    background-color: #ad3737;
  }
`;

export { StyledBlueButton, StyledRedButton };
