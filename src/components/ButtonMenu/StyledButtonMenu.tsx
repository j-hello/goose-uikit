import styled, { DefaultTheme } from "styled-components";
import { Variants } from "../Button/types";

type StyledButtonMenuProps = {
  variant: Variants;
  theme: DefaultTheme;
};

const StyledButtonMenu = styled.div<{ variant: Variants }>`
  display: flex;
  flex-wrap: wrap;

  & > a,
  & > button {
    margin: 8.5px;
    width: calc(50% - 17px);

    ${({ theme }) => theme.mediaQueries.sm} {
      width: auto;
      margin: 0;
    }
  }

  & > button + button,
  & > a + a {
    margin-right: 8.5px;
  }
`;

export default StyledButtonMenu;
