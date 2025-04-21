import styles from './Card.module.scss';
import type { CardDTO } from '../../pages/index/types/type';
type Props = {
    data: CardDTO;
    handleDialog: (e: boolean) => void;
    handleSetData: (e: CardDTO) => void;
}
const Card = ({ data, handleDialog, handleSetData }: Props) => {
    const openDialog = () => {
        handleDialog(true);
        handleSetData(data);
    }

    return (
        <div className={styles.card} onClick={openDialog}>
            <img src={data.urls.small} alt="" className={styles.card__image} />

        </div>
    );
};

export default Card;