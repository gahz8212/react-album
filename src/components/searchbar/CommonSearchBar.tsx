import type React from 'react';
import styles from './CommonSearchBar.module.scss';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { searchState } from '@/jotai/atoms/searchState';


const CommonSearchBar = () => {
    const [, setSearch] = useAtom(searchState);
    const [text, setText] = useState("")
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    const onClick = () => {
        if (text !== "") setSearch(text);
        setText('')
    }
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text !== "") setSearch(text);
        setText('')
    }
    return (
        <form className={styles.searchBox} onSubmit={onSubmit}>
            <div className={styles.searchBox__search}>
                <input type="text" placeholder="검색어를 입력 하세요." className={styles.searchBox__search__input} value={text} onChange={onChange} />
                <img src="./src/assets/icons/icon-search.svg" alt="icon" onClick={onClick} />
            </div>

        </form>
    );
};

export default CommonSearchBar;