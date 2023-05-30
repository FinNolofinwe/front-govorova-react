import { useState, useEffect, useRef, ReactNode, FC, RefObject } from 'react';
import styles from './StickyNavigation.module.scss';

interface INav {
    children: ReactNode,
    isOpenedModal: boolean
}

const StickyNavigation: FC<INav> = ({ children }) => {
    const [isSticky, setIsSticky] = useState(true);
    const ref: RefObject<HTMLDivElement> = useRef(null);

    const navClassName = `${styles.navigation} ${isSticky ? null : styles.navigation__hide}`

    useEffect(() => {
        const prevTop = ref.current!.getBoundingClientRect().y
        let prevScroll: number = 0
        const handleScroll = () => {
            const currentScroll: number = window.scrollY
            
              setIsSticky((currentScroll >= prevScroll && currentScroll - prevTop <= 200) 
                            || (prevScroll > currentScroll));
            
            prevScroll = currentScroll
        };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  
    return (
      <div className={navClassName} ref={ref}>
        {children}
      </div>
    );
  };
  export default StickyNavigation;