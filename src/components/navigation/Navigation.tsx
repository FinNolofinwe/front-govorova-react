
import styles from './Navigation.module.scss';
import { TLink, TIsOpened } from '../../types';
import NavigationItem from '../navigationItem/NavigationItem';


const Navigation = ({isOpenedMenu, setIsOpenedMenu, isNarrowScreen}: TIsOpened) => {
    const navigationStyle = isNarrowScreen 
                            ? (isOpenedMenu ? `${styles.navigation} ${styles.navigation__show}` : `${styles.navigation}`)
                            : (`${styles.navigation}`);

    const onCloseMenu = (isOpenedMenu: boolean) => {
        setIsOpenedMenu!(isOpenedMenu)
    }

    const navigationLinks: TLink[] = [
        {href: '#', name: 'Demos', subnav: true},
        {href: '#', name: 'Post', subnav: true},
        {href: '#', name: 'Features', subnav: true},
        {href: '#', name: 'Categories', subnav: true},
        {href: '#', name: 'Shop', subnav: true},
        {href: '#', name: 'Buy Now', subnav: false},
    ];


    return (

                <nav  className={navigationStyle}>  
                    <div className="wrapper">
                        <div className={styles.navigation__top}>
                            <h2 className={styles.navigation__logo}>logotype</h2>
                            <div onClick={() => onCloseMenu(false)} className={styles.navigation__close}>
                                <span className={styles.navigation__close__line}></span>
                                <span className={styles.navigation__close__line}></span>
                            </div>
                        </div>
                        <ul className={styles.navigation__list}>
                            {navigationLinks && navigationLinks.map((link: TLink, i: number) => {
                                return (
                                    <NavigationItem key={`${link.name}-${i}`} link={link} />
                                )
                            })}

                        </ul>
                    </div>
                </nav>
            
    )
}

export default Navigation