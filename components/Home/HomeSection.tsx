import router from "next/router";
import { SearchBox } from "../Common/SearchBox";
import styles from "./HomeSection.module.css";
export const HomeSection = () => {

    const handleSearch = (message: string) => {
        localStorage.setItem('message', message);
        router.push(`/chat?id=${Math.floor(Math.random() * 10000)}`);
    }

    return (
        <div className={styles.homeSection}>
            <img src="travel.png" alt="logo" style={{ width: '100%', height: '100px', objectFit: 'contain' }} />
            <div style={{ textAlign: 'right', marginInline: '24px', lineHeight: '24px', marginTop: '24px' }}>
                سلام من دستیار هوشمند سفر، خشت هستم.
                میتونم در برنامه‌ریزی سفر و رزرو اقامتگاه بهت کمک کنم.
            </div>
            <div style={{ padding: '24px', width: '100%' }}>
                <SearchBox leftIcon={<img src="voice.png" style={{ objectFit: "contain", paddingTop: "4px" }} width={24} height={24} alt="search" />} rightIcon={<img src="send.png" width={24} height={24} style={{ objectFit: "contain", paddingTop: "4px" }} alt="search" />} wrapperStyles={{}} handleSearch={handleSearch} />
            </div>
        </div>
    )
}