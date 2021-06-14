import styled, { DefaultTheme } from "styled-components";
import { InputProps, scales } from "./types";

interface StyledInputProps extends InputProps {
  theme: DefaultTheme;
}

/**
 * Priority: Warning --> Success
 */
const getBoxShadow = ({ isSuccess = false, isWarning = false, theme }: StyledInputProps) => {
  if (isWarning) {
    return theme.shadows.warning;
  }

  if (isSuccess) {
    return theme.shadows.success;
  }

  return theme.shadows.inset;
};

const getHeight = ({ scale = scales.MD }: StyledInputProps) => {
  switch (scale) {
    case scales.SM:
      return "32px";
    case scales.LG:
      return "48px";
    case scales.MD:
    default:
      return "40px";
  }
};

const Input = styled.input<InputProps>`
  background-color: var(--input-color);
  border: 0;
  border-radius: 1em;
  box-shadow: ${getBoxShadow};
  color: var(--text-color);
  display: block;
  font-size: var(--md-size);
  height: ${getHeight};
  outline: 0;
  padding: 0 17px;
  width: 100%;

  &::placeholder {
    color: var(--text-subtle-color);
  }

  &:disabled {
    background-color: var(--text-subtle-color);
    box-shadow: none;
    color: var(--text-subtle-color);
    cursor: not-allowed;
  }
`;

Input.defaultProps = {
  scale: scales.MD,
  isSuccess: false,
  isWarning: false,
};

export default Input;
