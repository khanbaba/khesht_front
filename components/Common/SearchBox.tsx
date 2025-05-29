import styles from "./SearchBox.module.css";

export const SearchBox = ({ rightIcon, leftIcon, wrapperStyles }: { rightIcon?: React.ReactNode, leftIcon?: React.ReactNode, wrapperStyles?: React.CSSProperties }) => {
    return (
        <div className={styles.searchBox} style={wrapperStyles}>
            {rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
            <textarea />
            {leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}
        </div>
    )
}