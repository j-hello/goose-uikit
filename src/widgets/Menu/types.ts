import { Login } from "../WalletModal/types";

export interface LangType {
  code: string;
  language: string;
}

export interface Profile {
  username?: string;
  image?: string;
  profileLink: string;
  noProfileLink: string;
  showPip?: boolean;
}

export interface PushedProps {
  isPushed: boolean;
  pushNav: (isPushed: boolean) => void;
}

export interface NavTheme {
  background: string;
  hover: string;
}

export interface MenuSubEntry {
  label: string;
  items?: MenuSubEntry[];
  href?: string;
  calloutClass?: string;
  initialOpenState?: boolean;
  sub?: boolean;
}

export interface MenuEntry {
  label: string;
  items?: MenuSubEntry[];
  href?: string;
  calloutClass?: string;
  initialOpenState?: boolean;
  sub?: boolean;
}

export interface PanelProps {
  cakePriceUsd?: number;
  links: Array<MenuEntry>;
  priceLink: string;
}

export interface NavProps extends PanelProps {
  account?: string;
  login: Login;
  profile?: Profile;
  logout: () => void;
}
