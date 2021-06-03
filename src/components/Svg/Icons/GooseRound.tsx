import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img src="/images/egg-icon.png" height="329" width="329" alt="Egg token"  {...props } />
  );
};

export default Icon;
