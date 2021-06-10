import React from "react";
import styled from "styled-components";

interface Props {
  togglePush: () => void;
}

const Button = styled.button`
  width: 33px;
  height: 21px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 0;
  background: none;
  padding: 0;
  cursor: pointer;

  > span {
    height: 3px;
    background: ${({ theme }) => theme.colors.primary};
    width: 100%;
  }
`;

const Hamburger: React.FC<Props> = ({ togglePush }) => {
  return (
    <Button aria-label="Toggle menu" onClick={togglePush}>
      <span></span>
      <span></span>
      <span></span>
    </Button>
  );
};

export default Hamburger;
