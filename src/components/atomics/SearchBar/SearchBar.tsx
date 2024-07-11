import { ChangeEvent, useState, useCallback, memo } from "react";
import styles from "./SearchBar.module.scss";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [query, setQuery] = useState("");

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            setQuery(value);
            onSearch(value);
        },
        [onSearch]
    );

    const handleReset = useCallback(() => {
        setQuery("");
        onSearch("");
    }, [onSearch]);

    return (
        <div className={styles.SearchBar}>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                className={styles.SearchBar__input}
                placeholder="Search users..."
            />
            <button onClick={handleReset} className={styles.SearchBar__reset}>
                Reset
            </button>
        </div>
    );
};

export default memo(SearchBar);
