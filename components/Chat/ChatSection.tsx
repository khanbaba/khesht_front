import { SearchBox } from "../Common/SearchBox";
import styles from "./ChatSection.module.css";
import { Title } from "../Common/Title";
import { Message } from "./Message";
import LodgeItem from "./Suggestions/LodgeItem";
import { Map } from "./Map/Map";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export const ChatSection = () => {

    const [suggestions, setSuggestions] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const [session_id, setSesstionId] = useState('')

    const router = useRouter();
    const idRef = useRef<string | string[] | null>(null);

    const fetchData = async (msg: string) => {
        setLoading(true);
        const url = `http://localhost:8001/user-prompt?prompt=${msg}&session_id=${session_id}`;
        const response = await fetch(url, {
            mode: 'cors'
        });
        const data = await response.json();
        setSesstionId(data.session_id);
        if (data.tool_response && data.tool_response.length > 0) {
            setSuggestions((prevSuggestions: any[]) => [...prevSuggestions, { 'response_type': 'places', 'data': data.tool_response }]);
        } else {
            setSuggestions((prevSuggestions: any[]) => [...prevSuggestions, { 'response_type': 'assistant', 'data': data.assistant_response }]);
        }
        setLoading(false);
    }

    useEffect(() => {
        const { id } = router.query;
        if (id && idRef.current === null) {
            idRef.current = id;
            const message = localStorage.getItem('message');
            if (message) {
                setSuggestions([{ 'response_type': 'user', 'data': message }]);
                setTimeout(() => {
                    fetchData(message);
                }, 10);
            }
        }
    }, [router.query]);


    const handleSearch = (msg: string) => {
        setSuggestions((prevSuggestions: any[]) => [...prevSuggestions, { 'response_type': 'user', 'data': msg }]);
        setTimeout(() => {
            fetchData(msg);
        }, 10);
    }


    return (
        <div className={styles.chatSection}>
            <Title label="مکالمه" />
            <div className={styles.messages}>
                <div className={styles.suggestionsContainer}>
                    {suggestions.map((item: any) => {
                        if (item.response_type === 'places') {
                            return (
                                <>
                                    {item.data.map((lodge: any) => {
                                        return (
                                            <LodgeItem key={lodge.id} imageUrl={lodge.image_url} name={lodge.title} rating={lodge.rating} review={lodge.reviews_count} price={lodge.price} url={lodge.web_url} />
                                        )
                                    })}
                                    <Map />
                                </>
                            )
                        }
                        if (item.response_type === 'assistant') {
                            return <p className={styles.assistantMessage}>{item.data}</p>
                        }
                        if (item.response_type === 'user') {
                            return <Message text={item.data} avatar={<img src="avatar.png" width={40} height={40} alt="avatar" />} />
                        }
                        return null;

                    })}
                </div>
                {loading && <span style={{ paddingInline: '16px', fontSize: '12px', color: 'var(--sky-500)' }}>در حال جستجو...</span>}

            </div>
            <div className={styles.searchContainer}>
                <SearchBox leftIcon={<img src="voice.png" style={{ objectFit: "contain", paddingTop: "4px" }} width={24} height={24} alt="search" />} rightIcon={<img src="send.png" width={24} height={24} style={{ objectFit: "contain", paddingTop: "4px" }} alt="search" />} wrapperStyles={{ minHeight: '60px' }} handleSearch={handleSearch} />
            </div>
        </div>
    )
}