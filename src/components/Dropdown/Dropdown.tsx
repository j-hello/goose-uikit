import React from "react";
import styled from "styled-components";
import { DropdownProps, PositionProps, Position } from "./types";

const getLeft = ({ position }: PositionProps) => {
  if (position === "top-right") {
    return "100%";
  }
  return "50%";
};

const getBottom = ({ position }: PositionProps) => {
  if (position === "top" || position === "top-right") {
    return "100%";
  }
  return "auto";
};

const DropdownContent = styled.div<{ position: Position }>`
  width: 100%;
  display: none;
  flex-direction: column;
  position: absolute;
  left: 0
  background-color: var(--secondary-color);
  box-shadow: var(--box-shadow);
  padding: 8.5px 17px;
  max-height: 500px;
  overflow-y: auto;
  z-index: ${({ theme }) => theme.zIndices.dropdown};
  border-radius: 1em;

  > a {
    font-size: var(--md-size);
    font-weight: 400;
    margin: 4.25px 0 4.25px 0;
    text-transform: uppercase;
  }
`;

const Container = styled.div`
  position: relative;
  &:hover ${DropdownContent}, &:focus-within ${DropdownContent} {
    display: flex;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({ target, position = "bottom", children }) => {
  return (
    <Container>
      {target}
      <DropdownContent position={position}>{children}</DropdownContent>
    </Container>
  );
};
Dropdown.defaultProps = {
  position: "bottom",
};

export default Dropdown;
