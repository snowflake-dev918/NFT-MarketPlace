import { NavbarProps } from "decentraland-ui";

export type Props = Partial<NavbarProps> & {
  pathname: string;
  isConnected: boolean;
  hasPendingTransactions: boolean;
  onNavigate: (path: string) => void;
};
