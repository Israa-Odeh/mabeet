import { CardProps } from "./types";
import styles from "./Card.module.css";

const Card = ({
  imageUrl,
  heading,
  region,
  altText,
  children,
  cardClassName,
  onClick,
}: CardProps) => (
  <div className={`${styles.card} ${cardClassName || ""}`} onClick={onClick}>
    <div className={styles.thumbnailWrapper}>
      <img src={imageUrl} alt={altText} className={styles.thumbnail} />
    </div>
    <div className={styles.info}>
      <h3 className={styles.heading}>{heading}</h3>
      <p className={styles.region}>{region}</p>
      {children && <div className={styles.extraContent}>{children}</div>}
    </div>
  </div>
);

export default Card;
