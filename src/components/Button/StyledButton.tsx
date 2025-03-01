import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import { ButtonProps, ButtonThemeVariant, variants } from "./types";

type ThemedProps = {
  theme: DefaultTheme;
} & ButtonProps;

const getDisabledStyles = ({ isloading, theme }: ThemedProps) => {
  if (isloading === true) {
    return `
      &:disabled,
      &.button--disabled {
        cursor: not-allowed;
      }
    `;
  }

  return `
    &:disabled,
    &.button--disabled {
      background-color: ${theme.colors.backgroundDisabled};
      border-color: ${theme.colors.backgroundDisabled};
      box-shadow: none;
      color: ${theme.colors.textDisabled};
      cursor: not-allowed;
    }
  `;
};

const removePointerEvents = ({ disabled, as }: ThemedProps) => {
  if (disabled && as && as !== "button") {
    return `
      pointer-events: none;
    `;
  }

  return "";
};

const getButtonVariantProp = (prop: keyof ButtonThemeVariant) => ({
  theme,
  variant = variants.PRIMARY,
}: ThemedProps) => {
  return theme.button[variant][prop];
};

const StyledButton = styled.button<ButtonProps>`
  align-items: center;
  background-color: ${getButtonVariantProp("background")};
  border: ${getButtonVariantProp("border")};
  border-radius: 2em;
  box-shadow: ${getButtonVariantProp("boxShadow")};
  color: ${getButtonVariantProp("color")};
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: var(--md-size);
  font-weight: 500;
  /* max-content instead of auto for Safari fix */
  width: max-content;
  line-height: 1.2;
  letter-spacing: 0.02em;
  justify-content: center;
  outline: 0;
  padding: 0.65em 1.25em;
  transition: background-color 0.2s;
  opacity: ${({ isloading }) => (isloading ? 0.5 : 1)};

  ${getDisabledStyles}
  ${removePointerEvents}
  ${space}
`;

StyledButton.defaultProps = {
  type: "button",
  isloading: false,
};

export default StyledButton;
