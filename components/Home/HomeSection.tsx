import { SearchBox } from "../Common/SearchBox";
import styles from "./HomeSection.module.css";
export const HomeSection = () => {
    return (
        <div className={styles.homeSection}>
            <img src="travel.png" alt="logo" style={{ width: '100%', height: '100px', objectFit: 'contain' }} />
            <div style={{ textAlign: 'right', marginInline: '24px', lineHeight: '24px', marginTop: '24px' }}>
                سلام من دستیار هوشمند سفر، خشت هستم.
                میتونم در برنامه‌ریزی سفر و رزرو اقامتگاه بهت کمک کنم.
            </div>
            <div style={{ padding: '24px', width: '100%' }}>
                <SearchBox rightIcon={<img src="send.png" width={24} height={24} alt="search" />} wrapperStyles={{ minHeight: '120px' }} />
            </div>
        </div>
    )
}