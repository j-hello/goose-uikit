import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 100 123" {...props}>
      <image width={100} height={123} href="/images/egg/egg-icon.png" />
    </Svg>
  );
};

export default Icon;
