import React from "react";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {}

const Logo: React.FC<LogoProps> = ({ ...props }) => {
  return (
    <img src="/images/goose-logo.png" height="166" width="500" alt="Goose Defi logo" {...props }  />
  );
};

export default Logo;
