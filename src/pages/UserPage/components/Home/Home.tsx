import { SearchBar } from "./components";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.home}>
      <h2 className={styles.title}>Find Your Next Place for Mabeet</h2>
      <p className={styles.description}>
        Nestled in the foothills of majestic mountains, the heart of cities, or
        wherever you desire, we offer comfortable accommodations with
        breathtaking views from every window.
      </p>
      <SearchBar />
    </section>
  );
};

export default Home;
