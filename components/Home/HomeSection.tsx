import router from "next/router";
import { SearchBox } from "../Common/SearchBox";
import styles from "./HomeSection.module.css";

const example = "اقامتگاه سنتی در شمال کنار رودخانه  "

export const HomeSection = () => {

    const handleSearch = (message: string) => {
        localStorage.setItem('message', message);
        router.push(`/chat?id=${Math.floor(Math.random() * 10000)}`);
    }

    return (
        <div className={styles.homeSection}>
            <img src="homa.png" alt="logo" style={{ height: '200px', borderRadius: "16px", width: "200px", objectFit: 'contain' }} />
            <div style={{ textAlign: 'right', marginInline: '24px', lineHeight: '24px', marginTop: '24px' }}>
                سلام!
                <br />
                من هما هستم و بهت کمک می‌کنم خیلی سریع سفر ایدئالت رو به واقعیت تبدیل کنیم!
            </div>
            <div style={{ padding: '24px', width: '100%' }}>
                <SearchBox leftIcon={<img src="voice.png" style={{ objectFit: "contain", paddingTop: "4px" }} width={24} height={24} alt="search" />} rightIcon={<img src="send.png" width={24} height={24} style={{ objectFit: "contain", paddingTop: "4px" }} alt="search" />} wrapperStyles={{}} handleSearch={handleSearch} />
            </div>
            <div style={{ display: 'flex', flexDirection: "column" }}>
                <div style={{ fontSize: "12px", margin: '12px 24px', textAlign: 'right', width: '100%', paddingInline: "24px" }}>
                    جستجوهای پرتکرار
                </div>
                <div onClick={e => handleSearch(example)} style={{ color: "var(--sky-800)", display: 'inline-block', textAlign: 'right', fontSize: "12px", paddingInline: "24px", border: "1px solid var(--sky-100)", borderRadius: "12px", padding: "8px 12px" }}>
                    {example}
                </div>
            </div>
        </div>
    )
}