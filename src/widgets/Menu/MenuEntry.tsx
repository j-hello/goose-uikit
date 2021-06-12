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
  margin: ${({ secondary }) => (secondary ? "8.5px 0 8.5px 17px" : "4.25px 0 4.25px 0")};
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
    color: ${({ isActive }) => (isActive ? "var(--primary-color)" : "var(--text-color)")};
  }

  // Safari fix
  flex-shrink: 0;
  width: max-content;
`;

MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

const SubMenuEntry = styled(MenuEntry)`
  color: ${({ isActive }) => (isActive ? "var(--primary-color)" : "var(--text-subtle-color)")};
  font-size: var(--md-size);
  div,
  a div,
  div a {
    color: ${({ isActive }) => (isActive ? "var(--primary-color)" : "var(--text-subtle-color)")};
  }
`;

export { MenuEntry, LinkLabel, SubMenuEntry };
