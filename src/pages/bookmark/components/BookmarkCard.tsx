import { useState, useEffect } from 'react';
import styles from './BookmarkCard.module.scss';
import type { CardDTO } from '@pages/index/types/type';
type Props = {
    card: CardDTO
}
const BookmarkCard = ({ card }: Props) => {


    return (


        <div className={styles.card}>
            <div className={styles.card__imgBox}>
                <img src={card.urls.small} className={styles.card__imgBox__image} />
            </div>
            <div className={styles.card__infoBox}>
                <div className={styles.card__infoBox__info}>
                    <div className={styles.label}>작성자</div>
                    <div className={styles.value}>{card.user.username}</div>
                </div>
                <div className={styles.card__infoBox__info}>
                    <div className={styles.label}>이미지 크기</div>
                    <div className={styles.value}>{card.width} X {card.height}</div>
                </div>
                <div className={styles.card__infoBox__info}>
                    <div className={styles.label}>업로드 날짜</div>
                    <div className={styles.value}>{card.created_at.split('T')[0]}</div>
                </div>
                <div className={styles.card__infoBox__info}>
                    <div className={styles.label}>마지막 업데이트</div>
                    <div className={styles.value}>{card.updated_at.split('T')[0]}</div>
                </div>
                <div className={styles.card__infoBox__info}>
                    <div className={styles.label}>다운로드 수</div>
                    <div className={styles.value}>{card.likes}</div>
                </div>

            </div>
        </div>



    );
};

export default BookmarkCard;