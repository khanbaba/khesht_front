import React, { ReactNode } from 'react';
import styles from './Message.module.css';

interface MessageProps {
    text: string;
    avatar: ReactNode;
}

export const Message: React.FC<MessageProps> = ({ text, avatar }) => {
    return (
        <div className={styles.messageContainer}>
            <div className={styles.avatarContainer}>
                {avatar}
            </div>
            <div className={styles.messageContent}>
                <p className={styles.messageText}>{text}</p>
            </div>
        </div>
    );
};

export default Message;
