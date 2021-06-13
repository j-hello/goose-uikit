import React, { useState } from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";
import { MenuEntry, LinkLabel, SubMenuEntry } from "./MenuEntry";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../../components/Svg";

interface Props {
  label: string;
  initialOpenState?: boolean;
  className?: string;
  sub?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // Safari fix
  flex-shrink: 0;
`;

const AccordionContent = styled.div<{ isOpen: boolean; maxHeight: number; sub: boolean }>`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
  transition: max-height 0.3s ease-out;
  overflow: hidden;

  display: ${({ sub }) => (sub ? "grid" : "block")};
  grid-template-columns: 1fr 1fr;
`;

const Accordion: React.FC<Props> = ({ label, initialOpenState = false, children, className, sub }) => {
  const [isOpen, setIsOpen] = useState(initialOpenState);

  const handleClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <Container>
      {sub ? (
        <SubMenuEntry onClick={handleClick} className={className}>
          <LinkLabel>{label}</LinkLabel>
          {isOpen ? <ArrowDropUpIcon width="12px" /> : <ArrowDropDownIcon width="12px" />}
        </SubMenuEntry>
      ) : (
        <MenuEntry onClick={handleClick} className={className}>
          <LinkLabel>{label}</LinkLabel>
          {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </MenuEntry>
      )}

      <AccordionContent
        isOpen={isOpen}
        maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT}
        sub={sub ? true : false}
      >
        {children}
      </AccordionContent>
    </Container>
  );
};

export default Accordion;
