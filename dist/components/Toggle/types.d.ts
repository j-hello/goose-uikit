import { InputHTMLAttributes } from "react";
export declare type ToggleTheme = {
    handleBackground: string;
};
export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
    background?: string;
}
