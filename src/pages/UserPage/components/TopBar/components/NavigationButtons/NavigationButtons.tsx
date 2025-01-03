import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import styles from "./NavigationButtons.module.css";

const navigationButtons = [
  { label: "Featured Deals", id: "featured-deals" },
  { label: "Recently Visited Hotels", id: "recently-visited" },
  { label: "Trending Destinations", id: "trending-destinations" },
];

const NavigationButtons = ({ onNavigate }: { onNavigate: () => void }) => {
  const isSmallScreen = useMediaQuery("(max-width:768px)");

  const handleButtonClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section &&
      window.scrollTo({
        top: section.offsetTop - 72,
        behavior: "smooth",
      });

    if (isSmallScreen) {
      onNavigate();
    }
  };

  return (
    <div className={styles.container}>
      {navigationButtons.map(({ label, id }) => (
        <Button
          disableElevation
          disableRipple
          key={id}
          variant="text"
          className={styles.button}
          onClick={() => handleButtonClick(id)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default NavigationButtons;
