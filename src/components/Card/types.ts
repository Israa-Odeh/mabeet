export type CardProps = {
  imageUrl: string;
  heading: string;
  region: string;
  altText: string;
  children?: JSX.Element | JSX.Element[];
  cardClassName?: string;
  onClick?: () => void;
};
