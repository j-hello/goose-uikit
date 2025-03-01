import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { sizes, variants } from "../Button/types";
import { ButtonMenuItemProps } from "./types";

type InactiveButtonProps = {
  colorkey: "primary" | "textSubtle";
} & ButtonMenuItemProps;

const InactiveButton = styled(Button)<InactiveButtonProps>`
  color: ${({ theme, colorkey }) => theme.colors[colorkey]};
`;

const ButtonMenuItem: React.FC<ButtonMenuItemProps> = ({
  isActive = false,
  size = sizes.MD,
  variant = variants.PRIMARY,
  as,
  ...props
}) => {
  if (!isActive) {
    return (
      <InactiveButton
        forwardedAs={as}
        size={size}
        variant="secondary"
        colorkey={variant === variants.PRIMARY ? "primary" : "textSubtle"}
        {...props}
      />
    );
  }

  return <Button as={as} size={size} variant={variant} {...props} />;
};

export default ButtonMenuItem;
