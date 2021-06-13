import React from "react";
import { PanelProps, PushedProps } from "./types";
import { Login } from "../WalletModal/types";
interface Props extends PanelProps, PushedProps {
    isMobile: boolean;
    account?: string;
    login: Login;
    logout: () => void;
}
declare const Panel: React.FC<Props>;
export default Panel;
