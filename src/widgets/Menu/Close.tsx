import React from "react";
import styled, { ThemeConsumer } from "styled-components";

interface Props {
  togglePush: () => void;
}

const Button = styled.button`
  border: 0;
  background: none;
  padding: 0;
  cursor: pointer;

  font-size: 50px;
  color: var(--primary-color);
  font-weight: 300;
  margin-right: -6px;
  margin-top: -9px;

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 55px;
  }
`;

const Close: React.FC<Props> = ({ togglePush }) => {
  return (
    <Button aria-label="Close menu" onClick={togglePush}>
      ×
    </Button>
  );
};

export default Close;
