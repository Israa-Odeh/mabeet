import { SyntheticEvent } from "react";

export type TabNavigationProps = {
  selectedTab: number;
  onTabChange: (_event: SyntheticEvent, newValue: number) => void;
};
