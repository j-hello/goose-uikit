import styled, { DefaultTheme } from "styled-components";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
}

const LinkLabel = styled.div`
  margin-right: 8.5px;
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: ${({ secondary }) => (secondary ? "4.25px 0 4.25px 17px" : "4.25px 0 4.25px 0")};
  font-size: ${({ secondary }) => (secondary ? "var(--subnav-size)" : "var(--nav-size)")};

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  div,
  a div,
  div a {
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
  color: ${({ isActive, theme }) => (isActive ? theme.colors.primary : theme.colors.textSubtle)};
  font-size: var(--md-size);
  div,
  a div,
  div a {
    color: ${({ isActive, theme }) => (isActive ? theme.colors.primary : theme.colors.textSubtle)};
  }
`;

export { MenuEntry, LinkLabel, SubMenuEntry };
