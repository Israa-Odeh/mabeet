import { useDrawer } from "./hooks/useDrawer";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Sidebar } from "./components";
import classNames from "classnames";
import { Outlet } from "react-router-dom";
import styles from "./AdminPage.module.css";

const AdminPage = () => {
  const { openDrawer, isLargeScreen, handleDrawerToggle } = useDrawer();

  return (
    <div className={styles.container}>
      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label={openDrawer ? "Close sidebar" : "Open sidebar"}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <h1 className={styles.title}>Mabeet</h1>
        </Toolbar>
      </AppBar>

      <Sidebar
        openDrawer={openDrawer}
        handleDrawerToggle={handleDrawerToggle}
        isLargeScreen={isLargeScreen}
      />

      <div
        className={classNames(styles.content, {
          [styles.contentWithSidebarOpen]: isLargeScreen && openDrawer,
        })}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
