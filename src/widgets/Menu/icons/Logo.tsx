import React from "react";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {}

const Logo: React.FC<LogoProps> = ({ ...props }) => {
  return (
    <img src="/images/goose-logo.png" height="500" width="166" alt="Goose Defi logo" />
  );
};

export default Logo;
