import React from "react";
import StyledToggle, { Input, Handle } from "./StyledToggle";
import { ToggleProps } from "./types";

const Toggle: React.FC<ToggleProps> = ({ color, checked, ...props }) => {
  const isChecked = !!checked;

  return (
    <StyledToggle checked={isChecked} color={color}>
      <Input checked={checked} {...props} type="checkbox" />
      <Handle />
    </StyledToggle>
  );
};

export default Toggle;
