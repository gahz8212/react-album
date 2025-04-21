import { useEffect, useState } from 'react'
import { useAtom, } from 'jotai'
import { loadable } from 'jotai/utils'
import { searchState } from '@jotai/atoms/searchState'
import { pageState } from '@jotai/atoms/pageState'
import { imagesData } from '@jotai/selectors/imageSelector'
import styles from './CommonFooter.module.scss'



function CommonFooter() {
    const [imgSelector] = useAtom(loadable(imagesData))
    const [search] = useAtom(searchState)
    const [page, setPage] = useAtom(pageState)
    const [step, setStep] = useState(0)


    useEffect(() => {
        setStep(0)
        setPage(1)
    }, [search])

    // 페이지 리스트 UI 생성
    if (imgSelector.state === "hasData") {

        const newArr: number[] = []
        for (let i = 1; i <= imgSelector.data.total_pages; i++) {
            newArr.push(i)
        }
        const length = newArr.length
        const divide = Math.floor(length / 10) + (Math.floor(length % 10) > 0 ? 1 : 0)

        /////////////////////////////MAP으로 변경하기///////////////////////////////////
        const res: number[][] = []//=>Map으로

        for (let i = 0; i <= divide; i++) {
            // 배열 0부터 n개씩 잘라 새 배열에 넣기
            res.push(newArr.splice(0, 10))
        }

        /////////////////////////////MAP으로 변경하기///////////////////////////////////
        // ----------------------------------------------------------------------------------------------------

        const moveToPage = (selected: number) => {
            setPage(selected)
        }
        const moveToPrev = () => {
            if (step === 0) return
            else {
                setStep(step - 1)
                setPage(res[step - 1][0])
            }
        }
        const moveToNext = () => {
            if (step < divide - 1) {
                setStep(step + 1)
                console.log('step,divide', step, divide)
                setPage(res[step + 1][0])
            } else return
        }

        return (
            <footer className={styles.footer}>
                <div className={styles.pagination}>
                    {step > 0 && <button className={styles.pagination__button} onClick={moveToPrev}>
                        <img src="./src/assets/icons/icon-arrowLeft.svg" alt="Left" />
                    </button>}
                    {/* 변경될 UI 부분 */}
                    {/* <span>1</span> */}
                    {res[step]?.map((item: number, index: number) => {
                        if (item < 11) {
                            return (
                                <button className={index === page - 1 ? `${styles.pagination__button} ${styles.active}` : `${styles.pagination__button} ${styles.inactive}`} key={item} onClick={() => { moveToPage(item); }}>
                                    {item}
                                </button>
                            )
                        } else {
                            return (
                                <button className={index === page - 1 - step * 10 ? `${styles.pagination__button} ${styles.active}` : `${styles.pagination__button} ${styles.inactive}`} key={item} onClick={() => { moveToPage(item); }}>
                                    {item}
                                </button>
                            )
                        }
                    })}
                    {step < divide - 1 && <button className={styles.pagination__button} onClick={moveToNext}>
                        <img src="./src/assets/icons/icon-arrowRight.svg" alt="Right" />
                    </button>}
                </div>
            </footer>
        )

    }

}
export default CommonFooter
