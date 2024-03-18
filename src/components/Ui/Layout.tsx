import { styled } from "styled-components";

const StyledModal01 = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  //display: none;
  width: 20rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  @media (prefers-color-scheme: dark) {
    color: #333;
  }
`;

export { StyledModal01 };
