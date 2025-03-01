import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import getThemeValue from "../../util/getThemeValue";
import { TextProps } from "./types";

interface ThemedProps extends TextProps {
  theme: DefaultTheme;
}

const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(`colors.${color}`, color)(theme);
};

const getFontSize = ({ fontSize, small }: TextProps) => {
  return small ? "var(--sm-size)" : fontSize || "var(--md-size)";
};

const Text = styled.div<TextProps>`
  color: ${getColor};
  font-size: ${getFontSize};
  font-weight: ${({ bold }) => (bold ? 500 : 400)};
  line-height: 1.4;
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${space}
`;

Text.defaultProps = {
  color: "text",
  small: false,
};

export default Text;
