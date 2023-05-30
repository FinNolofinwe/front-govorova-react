import { FC, useState } from 'react'
import { TLink } from '../../types';
import arrow from '../../assets/arrow-down.svg';
import Subnavigation from '../subnavigation/Subnavigation';
import styles from './NavigationItem.module.scss'

interface ILink {
    link: TLink
}

const NavigationItem: FC<ILink> = ({link}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
            <li 
                key={link.name} 
                className={styles.navigation__item}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                
            >
                <a href={link.href}>
                    {link.name} 
                    <span className={styles.navigation__arrow}>
                        {link.subnav && <img src={arrow} alt="Open" />}
                    </span>
                    {link.subnav && (
                        <Subnavigation isHovered={isHovered}/>
                    )}
                </a> 
            </li>
    )
}

export default NavigationItem