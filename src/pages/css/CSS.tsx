import styles from './styles/CSS.module.scss'
import CommonHeader from '@/components/header/CommonHeader';
import CommonFooter from '@/components/footer/CommonFooter';

const CSS = () => {
    return (

        <div className={styles.container}>
            <CommonHeader />
            <div className={styles.container__contents}>

                <div className={styles.container__contents__introBox} >

                    <div className={styles.wrapper}>
                        <div className={styles.wrapper__title}>title</div>
                        <div className={styles.wrapper__desc}>descript</div>
                    </div>
                </div>
                <div className="styles.container__contents__imageBox"></div>
            </div>
            <CommonFooter />
        </div>

    );
};

export default CSS;