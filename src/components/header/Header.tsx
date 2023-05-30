import { FC } from 'react';
import search from '../../assets/search.svg';
import styles from './Header.module.scss';
import { TIsOpened } from '../../types';


const Header: FC <TIsOpened> = ({setIsOpenedMenu}) => {

    const onShowMenu = (isOpenedMenu: boolean) => {
        setIsOpenedMenu!(isOpenedMenu)
    }

    return (
        <header className={styles.header}>
            <div className={`wrapper + ${styles.header__wrapper}`}>
                <div className={styles.header__top}>

                <div onClick={() => onShowMenu(true)} className={styles.burger}>
                    <div className={styles.burger__wrapper}>
                    <div className={styles.burger__line}>
                        <span></span>
                    </div>
                    <div className={styles.burger__line}>
                        <span></span>
                    </div>
                    <div className={styles.burger__line}>
                        <span></span>
                    </div>
                    </div>
                </div>

                <h1 className={styles.header__logo}>logotype</h1>
                <span className={styles.header__search}><img src={search} alt="Search" /></span>
                </div>
            </div>
        </header>
    )
}

export default Header