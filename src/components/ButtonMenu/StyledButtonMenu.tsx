import styled, { DefaultTheme } from "styled-components";
import { Variants } from "../Button/types";

type StyledButtonMenuProps = {
  variant: Variants;
  theme: DefaultTheme;
};

const StyledButtonMenu = styled.div<StyledButtonMenuProps>`
  display: flex;

  & > button + button,
  & > a + a {
    margin-left: 8.5px;
  }
`;

export default StyledButtonMenu;
