import styled, { keyframes, DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div`
  color: ${({ theme }) => theme.colors.text}};
  flex-grow: 1;
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: ${({ secondary }) => (secondary ? "0 0 25.5px 68px" : "0 0 25.5px 51px")};
  font-size: 24px;
  color: ${({ isActive, theme }) => (isActive ? theme.colors.primary : theme.colors.text)};
  letter-spacing: 0.01em;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  // Safari fix
  flex-shrink: 0;
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

export { MenuEntry, LinkLabel };
