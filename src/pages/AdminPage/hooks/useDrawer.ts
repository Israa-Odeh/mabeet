import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";

export const useDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const isLargeScreen = useMediaQuery("(min-width:768px)");

  useEffect(() => {
    setOpenDrawer(isLargeScreen);
  }, [isLargeScreen]);

  const handleDrawerToggle = () => setOpenDrawer(!openDrawer);

  return {
    openDrawer,
    isLargeScreen,
    handleDrawerToggle,
  };
};
