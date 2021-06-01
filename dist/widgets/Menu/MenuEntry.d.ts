import { DefaultTheme } from "styled-components";
export interface Props {
    secondary?: boolean;
    isActive?: boolean;
    theme: DefaultTheme;
}
declare const LinkLabel: import("styled-components").StyledComponent<"div", DefaultTheme, {}, never>;
declare const MenuEntry: import("styled-components").StyledComponent<"div", DefaultTheme, Props, never>;
export { MenuEntry, LinkLabel };
