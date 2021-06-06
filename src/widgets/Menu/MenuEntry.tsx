import styled, { DefaultTheme } from "styled-components";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
}

const LinkLabel = styled.div`
  flex-grow: 1;
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: ${({ secondary }) => (secondary ? "0 0 8.5px 68px" : "0 0 8.5px 51px")};
  font-size: ${({ secondary }) => (secondary ? "18.4725px" : "20.945px")};

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  div,
  a div {
    color: ${({ isActive, theme }) => (isActive ? theme.colors.primary : theme.colors.text)};
  }

  // Safari fix
  flex-shrink: 0;
`;

MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

const SubMenuEntry = styled(MenuEntry)`
  font-size: 16px;
  div,
  a div {
    color: ${({ isActive, theme }) => (isActive ? theme.colors.primary : theme.colors.textSubtle)};
  }
`;

export { MenuEntry, LinkLabel, SubMenuEntry };
