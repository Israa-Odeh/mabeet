import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import mabeetLogo from "@assets/logo.png";
import IconButton from "@mui/material/IconButton";
import { FiMenu, FiLogOut } from "react-icons/fi";
import NavigationButtons from "./components";
import styles from "./TopBar.module.css";

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => window.location.replace("/user");

  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  const handleSignOut = () => {
    if (isMenuOpen) toggleMenu();
    Cookies.remove("authToken");
    navigate("/", { replace: true });
  };

  return (
    <header className={styles.topbar}>
      <div className={styles.logoContainer} onClick={handleLogoClick}>
        <img
          src={mabeetLogo}
          width={48}
          height={32}
          alt="Mabeet website logo featuring the letter M, the first character of the website name. The logo is creatively designed with buildings arranged to form the shape of the M."
        />
        <h1 className={styles.title}>abeet</h1>
      </div>
      <nav>
        <IconButton
          size="small"
          disableRipple
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={toggleMenu}
          className={styles.menuButton}
        >
          <FiMenu size={24} />
        </IconButton>
        <div
          className={`${styles.controls} ${isMenuOpen ? styles.showMenu : ""}`}
        >
          <NavigationButtons onNavigate={toggleMenu} />
          <IconButton
            size="small"
            disableRipple
            aria-label="Sign Out"
            onClick={handleSignOut}
            className={styles.signOutButton}
            title="Sign Out"
          >
            <FiLogOut size={24} />
          </IconButton>
        </div>
      </nav>
    </header>
  );
};

export default TopBar;
