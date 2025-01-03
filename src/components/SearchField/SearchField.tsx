import { SearchFieldProps } from "./types";
import { BiSearch } from "react-icons/bi";
import styles from "./SearchField.module.css";

const SearchField = ({ placeholder, onSearchChange }: SearchFieldProps) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };
  
  return (
    <div className={styles.searchField}>
      <BiSearch className={styles.icon} size={24} />
      <input
        className={styles.input}
        type="search"
        placeholder={placeholder}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchField;
