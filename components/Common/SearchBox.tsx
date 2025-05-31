import styles from "./SearchBox.module.css";
import { useState } from "react";
export const SearchBox = ({ rightIcon, leftIcon, wrapperStyles, handleSearch }: { rightIcon?: React.ReactNode, leftIcon?: React.ReactNode, wrapperStyles?: React.CSSProperties, handleSearch?: (msg: string) => void }) => {
    const [message, setMessage] = useState('');
    const placeholder = 'اقامتگاه با ویوی جنگلی که صدای آبشار بیاد';

    return (
        <div className={styles.searchBox} style={wrapperStyles}>
            {rightIcon && <div className={styles.rightIcon} onClick={e => {
                handleSearch && handleSearch(message)
                setTimeout(() => {
                    setMessage('')
                }, 100)
            }}>{rightIcon}</div>}
            <div className={styles.wrapper}>
                <div className={styles.messageHidden}>
                    <span className={styles.spanhidden}>{message ? message : placeholder}</span>
                </div>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder={placeholder} />
            </div>
            {leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}
        </div>
    )
}