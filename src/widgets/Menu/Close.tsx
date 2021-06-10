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
  font-size: 60px;
  line-height: 1;
  font-weight: 400;

  position: absolute;
  top: var(--site-pad);
  right: calc(var(--site-pad) * 2);
`;

const Close: React.FC<Props> = ({ togglePush }) => {
  return (
    <Button aria-label="Close menu" onClick={togglePush}>
      ×
    </Button>
  );
};

export default Close;
