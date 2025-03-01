import { Colors } from "./types";

export const baseColors = {
  failure: "#ededf2",
  primary: "#7342a7",
  primaryBright: "#7342a7",
  primaryDark: "#7342a7",
  secondary: "#ffffff",
  success: "#7342a7",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#ededf2",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#ededf2",
  tertiary: "#ededf2",
  text: "rgb(0 0 0 / 80%)",
  textDisabled: "#BDC2C4",
  textSubtle: "rgb(0 0 0 / 40%)",
  borderColor: "#E9EAEB",
  card: "#fff",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
  modalBackground: "#ededf2",
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "rgb(0 0 0 / 80%)",
  textDisabled: "#666171",
  textSubtle: "rgb(0 0 0 / 40%)",
  borderColor: "#524B63",
  card: "#fff",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
  modalBackground: "#ededf2",
};
