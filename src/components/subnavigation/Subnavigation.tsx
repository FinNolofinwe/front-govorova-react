import { FC } from 'react';
import { TLink } from '../../types';
import arrow from '../../assets/arrow-right.svg'
import styles from './Subnavigation.module.scss';

interface IHovered {
    isHovered: boolean
}

const subLinks: TLink[] = [
    {href: '#', name: 'Post Header'},
    {href: '#', name: 'Post Layout'},
    {href: '#', name: 'Share Buttons'},
    {href: '#', name: 'Gallery Post'},
    {href: '#', name: 'Video Post'}
]

const Subnavigation: FC<IHovered> = ({isHovered}) => {
    
    let subNavStyle = isHovered 
                        ? `${styles.subnavigation} ${styles.subnavigation__show}` 
                        : `${styles.subnavigation}`;

    return (

                <div className={subNavStyle}>
                    <ul className={styles.subnavigation__list}>
                        {subLinks && (subLinks.map((link: TLink, i: number) => {
                            return (
                                <li key={`${link.name}-${i}`} className={styles.subnavigation__item}>
                                    <a href={link.href}><span>{link.name}</span> 
                                        <img className={styles.subnavigation__arrow} src={arrow} alt="Open" />
                                    </a>
                                </li>
                            )
                        })
                        )}
                    </ul>
                </div>
    )
}

export default Subnavigation