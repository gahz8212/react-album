import { useState, useMemo } from 'react'
import styles from "./styles/index.module.scss";
import Header from '@components/header/CommonHeader'
import Search from '@components/searchbar/CommonSearchBar'
import Navigation from '@components/navigation/CommonNavigation'
import Card from '@components/card/Card'
import type { CardDTO } from './types/type';
import { imagesData } from '@jotai/selectors/imageSelector';
import { useAtomValue } from 'jotai';
import { loadable } from 'jotai/utils';
import DialogBox from "@components/dialogBox/DialogBox";
import CommonFooter from '@/components/footer/CommonFooter';
import CommonLoader from '@/components/loader/CommonLoader';
const Album = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [imgData, setImgData] = useState<CardDTO>()
    const datas = useAtomValue(loadable(imagesData))
    // console.log('datas', datas)
    const results = useMemo(() => {

        if (datas.state === 'hasData') {
            const results = datas.data.results.map((card: CardDTO) => (<Card data={card} key={card.id}
                handleDialog={setOpen}
                handleSetData={setImgData} />))
            return results;
        } else {
            const results = <CommonLoader />
            return results;
        }
    }, [datas]);

    return (
        <div className={styles.page}>
            {/* 공통 헤더 UI 부분 */}
            <Header />
            {/* 공통 네비게이션션 UI 부분 */}
            <Navigation />
            <div className={styles.page__contents}>
                <div className={styles.page__contents__introBox}>
                    <div className={styles.wrapper}>
                        <span className={styles.wrapper__title}>PhotoSplash</span>
                        <span className={styles.wrapper__desc}>
                            인터넷의 시각 자료 출처입니다. <br />모든 지역에 있는 크리에이터들의
                            지원을 받습니다.
                        </span>
                        {/* 검색창 UI 부분분 */}
                        <Search />
                    </div>
                </div>
                <div className={styles.page__contents__imageBox}>
                    {results}
                </div>
            </div>
            {/* {공통 푸터 UI 부분} */}
            <CommonFooter />
            {open && <DialogBox data={imgData} handleDialog={setOpen} />}
        </div >
    );
};

export default Album;
