import styled, { DefaultTheme } from "styled-components";
import { TagProps } from "./types";

interface ThemedProps extends TagProps {
  theme: DefaultTheme;
}

export const StyledTag = styled.div<ThemedProps>`
  align-items: center;
  background-color: var(--background-color);
  border: none;
  border-radius: 1em;
  color: var(--primary-color);
  display: inline-flex;
  font-size: var(--sm-size);
  font-weight: 500;
  height: 28px;
  line-height: 28px;
  padding: 0 8.5px;
  white-space: nowrap;

  box-shadow: var(--box-shadow) svg {
    fill: var(--primary-color);
  }
`;

export default null;
