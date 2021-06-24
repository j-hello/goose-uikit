import React, { cloneElement, Children, ReactElement } from "react";
import styled from "styled-components";
import { sizes, variants } from "../Button/types";
import { ButtonMenuProps, ButtonMenuItemProps } from "./types";
import { Variants } from "../Button/types";

type StyledButtonMenuProps = {
  variant: Variants;
};

const StyledButtonMenu = styled.div<StyledButtonMenuProps>`
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
    margin-left: 8.5px;
  }
`;

const ButtonMenuMulti: React.FC<ButtonMenuProps> = ({
  activeIndex = 0,
  size = sizes.MD,
  variant = variants.PRIMARY,
  onClick,
  children,
}) => {
  return (
    <StyledButtonMenu variant={variant}>
      {Children.map(children, (child: ReactElement<ButtonMenuItemProps>, index) => {
        return cloneElement(child, {
          isActive: activeIndex === index,
          onClick: onClick ? () => onClick(index) : undefined,
          size,
          variant,
        });
      })}
    </StyledButtonMenu>
  );
};

export default ButtonMenuMulti;
