import React from "react";
import StyledToggle, { Input, Handle } from "./StyledToggle";
import { ToggleProps } from "./types";

const Toggle: React.FC<ToggleProps> = ({ background, checked, ...props }) => {
  const isChecked = !!checked;

  return (
    <StyledToggle checked={isChecked} background={background}>
      <Input checked={checked} {...props} type="checkbox" />
      <Handle />
    </StyledToggle>
  );
};

export default Toggle;
