import React from "react";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import StyledButton from "./StyledButton";
import { ButtonProps, variants, sizes } from "./types";

const Button: React.FC<ButtonProps> = ({ startIcon, endIcon, children, external, isloading, disabled, ...props }) => {
  const internalProps = external ? getExternalLinkProps() : {};
  const isDisabled = isloading || disabled;

  Button.defaultProps = {
    variant: variants.PRIMARY,
    size: sizes.MD,
    external: false,
    isloading: false,
    disabled: false,
  };

  return (
    <StyledButton {...internalProps} {...props} disabled={isDisabled}>
      {React.isValidElement(startIcon) &&
        React.cloneElement(startIcon, {
          mr: "0.5rem",
        })}
      {children}
      {React.isValidElement(endIcon) &&
        React.cloneElement(endIcon, {
          ml: "0.5rem",
        })}
    </StyledButton>
  );
};

export default Button;
