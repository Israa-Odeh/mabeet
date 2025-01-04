import { SidebarProps } from "./types";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HotelIcon from "@mui/icons-material/Hotel";
import Cookies from "js-cookie";
import {
  Drawer,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import LogoutIcon from "@mui/icons-material/Logout";
import styles from "./Sidebar.module.css";

const Sidebar = ({
  openDrawer,
  handleDrawerToggle,
  isLargeScreen,
}: SidebarProps) => {
  const navItems = [
    {
      path: "cities",
      label: "Cities",
      icon: <ApartmentIcon />,
    },
    {
      path: "hotels",
      label: "Hotels",
      icon: <HotelIcon />,
    },
  ];

  const handleSignOut = () => Cookies.remove("authToken");

  return (
    <Drawer
      sx={{ width: openDrawer ? 224 : 0 }}
      className={styles.drawer}
      classes={{
        paper: styles.drawerPaper,
      }}
      variant={isLargeScreen ? "persistent" : "temporary"}
      anchor="left"
      open={openDrawer}
      onClose={() => handleDrawerToggle()}
    >
      <div style={{ width: 224 }} className={styles.drawerContent}>
        <div>
          <IconButton onClick={handleDrawerToggle}>
            <ChevronLeft sx={{ color: "#20292d" }} />
          </IconButton>
        </div>
        <List>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={`/admin/${item.path}`}
              className={({ isActive }) =>
                classNames(styles.navLink, { [styles.active]: isActive })
              }
            >
              <ListItemIcon className={styles.icon}>{item.icon}</ListItemIcon>
              <ListItemText
                disableTypography
                primary={item.label}
                sx={{
                  fontFamily: "Poppins, serif",
                  color: "#20292d",
                }}
              />
            </NavLink>
          ))}
        </List>
        <div className={styles.signOutItem}>
          <NavLink
            to="/"
            replace
            className={styles.navLink}
            onClick={handleSignOut}
          >
            <ListItemIcon className={styles.icon}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary="Sign Out"
              sx={{
                fontFamily: "Poppins, serif",
                color: "#20292d",
              }}
            />
          </NavLink>
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
