import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 7L8.03572 0.999999L1.07143 7" stroke="text" strokeWidth="1.5" />
    </Svg>
  );
};

export default Icon;
