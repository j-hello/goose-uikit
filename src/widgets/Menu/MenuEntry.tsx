import styled from "styled-components";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  featured?: boolean;
}

const LinkLabel = styled.div`
  margin-right: 12.75px;
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: ${({ secondary }) => (secondary ? "8.5px 0 8.5px 17px" : "4.25px 0 4.25px 0")};
  font-size: ${({ secondary }) => (secondary ? "var(--subnav-size)" : "var(--nav-size)")};
  position: relative;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  > * {
    color: ${({ isActive }) => (isActive ? "var(--primary-color)" : "var(--text-color)")};
  }

  // Safari fix
  flex-shrink: 0;
  width: max-content;
`;

MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  featured: false,
  role: "button",
};

const SubMenuEntry = styled(MenuEntry)`
  color: ${({ isActive }) => (isActive ? "var(--primary-color)" : "var(--text-subtle-color)")};
  font-size: var(--md-size);
  > * {
    color: ${({ isActive }) => (isActive ? "var(--primary-color)" : "var(--text-subtle-color)")};
  }
`;

export { MenuEntry, LinkLabel, SubMenuEntry };
