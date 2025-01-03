export type StepperProps = {
  label: string;
  value: number;
  onChange: (newValue: number) => void;
  max: number;
  min?: number;
  step?: number;
};
