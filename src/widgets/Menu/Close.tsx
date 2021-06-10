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

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 300;
  position: absolute;
  top: var(--site-pad);
  right: calc(var(--site-pad) * 2);
  margin-right: -19px;
  margin-top: -9px;
`;

const Close: React.FC<Props> = ({ togglePush }) => {
  return (
    <Button aria-label="Close menu" onClick={togglePush}>
      ×
    </Button>
  );
};

export default Close;
