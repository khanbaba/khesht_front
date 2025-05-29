import { SearchBox } from "../Common/SearchBox";
import styles from "./ChatSection.module.css";
import { Title } from "../Common/Title";
import { Message } from "./Message";
import LodgeItem from "./Suggestions/LodgeItem";
import { Map } from "./Map/Map";
export const ChatSection = () => {
    return (
        <div className={styles.chatSection}>
            <Title label="مکالمه" />
            <div className={styles.messages}>
                <div className={styles.messageContainer}>
                    <Message text="سلام میشه بهم کمک کنی بتونم اقامتگاه مناسب برای سفرم پیدا کنم؟" avatar={<img src="avatar.png" width={40} height={40} alt="avatar" />} />
                </div>
                <div className={styles.suggestionsContainer}>
                    <LodgeItem imageUrl="https://storage.jajiga.com/public/pictures/medium/2024/07/18/3229175240718202323.jpg" name="اجاره کلبه سوئیسی در لفور - شاهکلا" rating={4.5} review="100 دیدگاه" price={1000000} url="https://www.jajiga.com/room/3229175" />
                    <LodgeItem imageUrl="https://storage.jajiga.com/public/pictures/medium/2024/07/18/3229175240718202323.jpg" name="اجاره کلبه سوئیسی در لفور - شاهکلا" rating={4.5} review="100 دیدگاه" price={1000000} url="https://www.jajiga.com/room/3229175" />
                    <LodgeItem imageUrl="https://storage.jajiga.com/public/pictures/medium/2024/07/18/3229175240718202323.jpg" name="اجاره کلبه سوئیسی در لفور - شاهکلا" rating={4.5} review="100 دیدگاه" price={1000000} url="https://www.jajiga.com/room/3229175" />
                </div>
                <Map />
            </div>
            <div className={styles.searchContainer}>
                <SearchBox rightIcon={<img src="send.png" width={24} height={24} alt="search" />} wrapperStyles={{ minHeight: '60px' }} />
            </div>
        </div>
    )
}