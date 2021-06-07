import styled, { DefaultTheme } from "styled-components";
import getColor from "../../util/getColor";
import { TagProps } from "./types";

interface ThemedProps extends TagProps {
  theme: DefaultTheme;
}

const getThemeTextColor = ({ outline, variant = "primary", theme }: ThemedProps) =>
  outline ? getColor(variant, theme) : "#ffffff";

export const StyledTag = styled.div<ThemedProps>`
  align-items: center;
  background-color: ${({ outline, theme, variant = "primary" }) =>
    outline ? "transparent" : getColor(variant, theme)};
  border: 2px solid ${({outline,  variant = "primary", theme }) => outline ? `2px solid ${getColor(variant, theme)}` : "none"};
  border-radius: 2em;
  color: ${getThemeTextColor};
  display: inline-flex;
  font-size: 14px;
  font-weight: 500;
  height: 28px;
  line-height: 28px;
  padding: 0 8.5px;
  white-space: nowrap;

  box-shadow: ${({ outline }) => outline ? "none" : "0 0 5px 0 rgb(115 66 167 / 40%), 0 0 25px 0 rgb(115 66 167 / 30%), 0 0 50px 0 rgb(115 66 167 / 20%)"};
  

  svg {
    fill: ${getThemeTextColor};
  }
`;

export default null;
