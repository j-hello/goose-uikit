import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 15 8" {...props}>
      <path d="M1.07144 1L8.03573 7L15 1"/>    
    </Svg>
  );
};

export default Icon;
