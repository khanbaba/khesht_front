import React from 'react';
import Link from 'next/link';
import styles from './LodgeItem.module.css';

interface LodgeItemProps {
    imageUrl: string;
    name: string;
    rating: number;
    review: string;
    price: number;
    url: string;
}

const LodgeItem: React.FC<LodgeItemProps> = ({
    imageUrl,
    name,
    rating,
    review,
    price,
    url,
}) => {
    return (
        <a href={url} className="block" target="_blank">
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <img
                        src={'https://storage.jajiga.com/public/pictures/medium/' + imageUrl}
                        alt={name}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <div className={styles.ratingContainer}>
                        <span className={styles.rating}>{rating}</span>
                        <span className={styles.review}>({review} دیدگاه)</span>
                    </div>
                    <div className={styles.title}>{name}</div>
                    <div className={styles.price}>
                        {price.toLocaleString()} تومان
                    </div>
                    <div className={styles.view}>مشاهده</div>
                </div>
            </div>
        </a>
    );
};

export default LodgeItem;
