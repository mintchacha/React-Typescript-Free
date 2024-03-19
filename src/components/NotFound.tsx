import { styled } from "styled-components";
import Header from "./Common/Header";

const StyledNotFound = styled.p`
  display: grid;
  place-content: center;
  height: calc(100vh - 6rem);
  @media all and (max-width: 460px) {
    height: calc(100vh - 8rem);
  }
`;

const NotFound = () => {
  return (
    <>
      <Header />
      <StyledNotFound>준비 중입니다.</StyledNotFound>
    </>
  );
};

export default NotFound;
