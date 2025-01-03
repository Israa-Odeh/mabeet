import { TabNavigationProps } from "./types";
import { useTheme, useMediaQuery, Tabs, Tab } from "@mui/material";
import { FaHotel, FaBed, FaStar } from "react-icons/fa";
import styles from "./TabNavigation.module.css";

const TabNavigation = ({ selectedTab, onTabChange }: TabNavigationProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Tabs
      value={selectedTab}
      onChange={onTabChange}
      variant={isMobile ? "fullWidth" : "standard"}
      className={styles.tabs}
      sx={{
        "& .MuiTabs-indicator": {
          backgroundColor: "#20292d",
        },
        "& .MuiTab-root": {
          color: "#666",
          "&.Mui-selected": {
            color: "#20292d",
          },
        },
      }}
    >
      <Tab
        label="Hotel Details"
        icon={<FaHotel className={styles.tabIcon} />}
        iconPosition="start"
      />
      <Tab
        label="Available Rooms"
        icon={<FaBed className={styles.tabIcon} />}
        iconPosition="start"
      />
      <Tab
        label="Guest Reviews"
        icon={<FaStar className={styles.tabIcon} />}
        iconPosition="start"
      />
    </Tabs>
  );
};

export default TabNavigation;
