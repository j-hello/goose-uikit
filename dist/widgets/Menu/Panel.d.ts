import React from "react";
import { PanelProps, PushedProps } from "./types";
interface Props extends PanelProps, PushedProps {
    isMobile: boolean;
}
declare const Panel: React.FC<Props>;
export default Panel;
