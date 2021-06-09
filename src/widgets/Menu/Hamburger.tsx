import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../components/Svg";
import Flex from "../../components/Flex/Flex";
import { HamburgerIcon, HamburgerCloseIcon, LogoIcon as LogoWithText } from "./icons";
import MenuButton from "./MenuButton";

interface Props {
  togglePush: () => void;
}

const Button = styled.button`
  width: 38px;
  height: 26px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 17px;

  > span {
    height: 4px;
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
