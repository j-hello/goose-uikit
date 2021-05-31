import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {}

const Logo: React.FC<LogoProps> = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 150 47" {...props}>
      <image
        width="150"
        height="47"
        href="/images/egg/goose-logo.png"
      />
    </Svg>
  );
};

export default Logo;
