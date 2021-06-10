import React from "react";
import styled from "styled-components";

interface Props {
  togglePush: () => void;
}

const Button = styled.button`
  width: 38px;
  height: 26px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 0;
  background: none;
  padding: 0;
  cursor: pointer;
`;

const Close: React.FC<Props> = ({ togglePush }) => {
  return (
    <Button aria-label="Close menu" onClick={togglePush}>
      ×
    </Button>
  );
};

export default Close;
