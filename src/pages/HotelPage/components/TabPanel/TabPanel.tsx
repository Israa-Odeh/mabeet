import { TabPanelProps } from "./types";

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`hotel-tabpanel-${index}`}
      aria-labelledby={`hotel-tab-${index}`}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
};

export default TabPanel;
