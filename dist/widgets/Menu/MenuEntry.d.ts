export interface Props {
    secondary?: boolean;
    isActive?: boolean;
    featured?: boolean;
}
declare const LinkLabel: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
declare const MenuEntry: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, Props, never>;
declare const SubMenuEntry: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, Props, never>;
export { MenuEntry, LinkLabel, SubMenuEntry };
