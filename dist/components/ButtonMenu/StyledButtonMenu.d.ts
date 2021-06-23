import { DefaultTheme } from "styled-components";
import { Variants } from "../Button/types";
declare type StyledButtonMenuProps = {
    variant: Variants;
    theme: DefaultTheme;
};
declare const StyledButtonMenu: import("styled-components").StyledComponent<"div", DefaultTheme, StyledButtonMenuProps, never>;
export default StyledButtonMenu;
