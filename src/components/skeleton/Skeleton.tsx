import styles from './Skeleton.module.scss';
import { useRef, RefObject, useEffect } from 'react';


const Skeleton = () => {
  const elem: RefObject<HTMLDivElement> = useRef(null)


  useEffect(() => {
    const elemWidth = elem.current!.getBoundingClientRect().width
    elemWidth && (elem.current!.style.height = `${elemWidth * 1.3}px`)

  }, [])

  return (
    <>
        <div className={styles.skeleton} ref={elem} >
            <div  className={styles.skeleton__card}>
                <div className={styles.shimmer__wrapper}>
                    <div className={styles.shimmer}></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Skeleton