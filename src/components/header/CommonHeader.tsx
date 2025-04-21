import styles from './CommonHeader.module.scss';
import { useNavigate, useLocation } from 'react-router-dom';
const CommonHeader = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const onClick = () => {
        if (location.pathname === '/bookmark') { navigate('/') } else {
            navigate('/bookmark')
        }
    }
    return (
        <div className={styles.header}>
            <div className={styles.header__logoBox}>
                <img className={styles.header__logoBox__logo}
                    src="./src/assets/images/image-logo.png" />
                <span className={styles.header__logoBox__title}>PhotoSplash</span>
            </div>
            <div className={styles.header__profileBox}>
                <button className={styles.header__profileBox__button}>사진제출</button>
                <button className={styles.header__profileBox__button} onClick={onClick}>
                    {location.pathname === '/bookmark' ? '뒤로' : '북마크'}
                </button>
                <div className={styles.header__profileBox__userName}>berserk.gahz</div>
            </div>

        </div>
    );
};

export default CommonHeader;