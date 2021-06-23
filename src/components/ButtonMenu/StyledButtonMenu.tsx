import styled, { DefaultTheme } from "styled-components";
import { Variants } from "../Button/types";

type StyledButtonMenuProps = {
  variant: Variants;
  multi?: boolean;
  theme: DefaultTheme;
};

const StyledButtonMenu = styled.div<StyledButtonMenuProps>`
  display: flex;
  flex-wrap: wrap;

  & > a,
  & > button {
    margin: ${({ multi }) => (multi ? "8.5px" : "0")};
    width: ${({ multi }) => (multi ? "calc(50% - 17px)" : "auto")};

    ${({ theme }) => theme.mediaQueries.sm} {
      width: auto;
      margin: 0;
    }
  }

  & > button + button,
  & > a + a {
    margin-left: 8.5px;
  }
`;

export default StyledButtonMenu;
