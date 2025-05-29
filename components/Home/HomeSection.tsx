import { SearchBox } from "../Common/SearchBox";
import styles from "./HomeSection.module.css";
export const HomeSection = () => {
    return (
        <div className={styles.homeSection}>
            <div style={{ textAlign: 'right', marginInline: '24px', lineHeight: '24px' }}>
                سلام من دستیار هوشمند سفر، خشت هستم.
                میتونم در برنامه‌ریزی سفر و رزرو اقامتگاه بهت کمک کنم.
            </div>
            <SearchBox rightIcon={<img src="send.png" width={24} height={24} alt="search" />} wrapperStyles={{ minHeight: '120px' }} />
        </div>
    )
}