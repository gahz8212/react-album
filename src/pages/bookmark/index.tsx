import { useEffect, useState } from 'react';
import CommonHeader from '@/components/header/CommonHeader';
import BookmarkCard from './components/BookmarkCard';
import styles from './Bookmark.module.scss'
import type { CardDTO } from '../index/types/type';
const index = () => {
    const [cards, setCards] = useState<CardDTO[]>([]);
    useEffect(() => {
        const getLocalStorage: CardDTO[] = JSON.parse(localStorage.getItem('favorites'))
        if (!getLocalStorage || getLocalStorage === null) {
            return;

        } else {
            setCards(getLocalStorage)
        }
    }, []);
    return (
        <div className={styles.bookmark}>
            <CommonHeader />
            <div className={styles.bookmark__cards}>

                {cards.map(card => <BookmarkCard card={card} key={card.id} />)}
            </div>
        </div>
    );
};

export default index;