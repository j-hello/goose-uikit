import React from "react";
import { PushedProps } from "./types";
interface Props extends PushedProps {
    label: string;
    initialOpenState?: boolean;
    className?: string;
    sub?: boolean;
}
declare const Accordion: React.FC<Props>;
export default Accordion;
