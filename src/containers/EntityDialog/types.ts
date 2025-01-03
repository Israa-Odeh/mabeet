export type EntityDialogProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: JSX.Element | JSX.Element[];
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
};
