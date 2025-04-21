import './Dialog.css'
import styled from './DialogBox.module.scss'
import type { CardDTO } from '@pages/index/types/type';
import { useEffect, useState } from 'react'
type Props = {
    data: CardDTO;
    handleDialog: (e: boolean) => void;
}
const DialogBox = ({ data, handleDialog }: Props) => {

    const closeDialog = () => {
        handleDialog(false);

    }
    const [selected, setSelected] = useState<boolean>(false)

    const addItem = (selected: CardDTO) => {

        const getLocalStorage = JSON.parse(localStorage.getItem('favorites'))
        if (!getLocalStorage || getLocalStorage === null) {
            localStorage.setItem("favorites", JSON.stringify([selected]))
            setSelected(true)
        } else {
            //getLocalStorage는 있는데 id가 포함되어 있거나
            if (getLocalStorage.findIndex((storage: CardDTO) => storage.id === selected.id) > -1) return
            else {
                const lists = [...getLocalStorage, selected]
                localStorage.setItem("favorites", JSON.stringify(lists))
                setSelected(true)
            }

        }
    }
    useEffect(() => {
        const getLocalStorage: CardDTO[] = JSON.parse(localStorage.getItem('favorites'))
        if (getLocalStorage && getLocalStorage !== null) {
            if (getLocalStorage.findIndex((storage: CardDTO) => {
                return storage.id === data.id
            }) > -1)
                setSelected(true)
        }
    }, [])

    return (
        <div className={styled.container}>
            <div className={styled.container__dialog}>
                <div className={styled.container__dialog__header}>
                    <div className={styled.close}>
                        <button className={styled.close__button} onClick={closeDialog}>

                            <span className="material-symbols-outlined" >
                                close
                            </span>

                        </button>
                        <img src={data.user.profile_image.small} className={styled.close__authorImage} alt={data?.user.name} />
                        <div className={styled.close__authorName}>{data.user.name}</div>
                    </div>
                    <div className={styled.bookmark}>
                        <button className={styled.bookmark__button} onClick={() => { addItem(data) }}>


                            <span className={
                                selected ? "material-symbols-outlined fill" : "material-symbols-outlined"

                            }>
                                favorite
                            </span>


                        </button>
                        <button className={styled.bookmark__button}>다운로드</button>

                    </div>
                </div>
                <div className={styled.container__dialog__body}>
                    <img src={data.urls.small} alt="" className={styled.image} />
                </div>
                <div className={styled.container__dialog__footer}>
                    <div className={styled.infoBox}>
                        <div className={styled.infoBox__item}>
                            <span className={styled.infoBox__item__label}>이미지 크기</span>
                            <span className={styled.infoBox__item__value}>{data.width}X{data.height}</span>
                        </div>
                        <div className={styled.infoBox__item}>
                            <span className={styled.infoBox__item__label}>업로드</span>
                            <span className={styled.infoBox__item__value}>{data.created_at.split('T')[0]}</span>
                        </div>
                        <div className={styled.infoBox__item}>
                            <span className={styled.infoBox__item__label}>마지막 업데이트</span>
                            <span className={styled.infoBox__item__value}>{data.created_at.split('T')[0]}</span>
                        </div>
                        <div className={styled.infoBox__item}>
                            <span className={styled.infoBox__item__label}>다운로드</span>
                            <span className={styled.infoBox__item__value}>{data.likes}</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DialogBox;