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
  margin: ${({ secondary }) => (secondary ? "0 0 17px 68px" : "0 0 21.25px 51px")};
  font-size: ${({ secondary }) => (secondary ? "20px" : "22px")};
  letter-spacing: 0.01em;

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
