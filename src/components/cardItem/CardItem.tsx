import { TCard } from '../../types'
import styles from './CardItem.module.scss';

interface TData {
    data: TCard;
    isOpenedModal: boolean;
    handleCardClick: () => void;
  }

const CardItem = ({data, handleCardClick}: TData) => {
    
    return (
            <>        
                <div onClick={handleCardClick} className={styles.card}>
                    <img src={data.img} loading="lazy" srcSet={`${data.img_2x} 2x`} alt={data.title} className={styles.card__img} />
                        <p className={styles.card__category}>{data.tags}</p>
                        <h3 className={styles.card__title}>{data.title}</h3>
                        <div className={styles.card__info}>
                            <span className={styles.card__author}>{data.autor}</span>
                            <span className={styles.card__date}>{data.date}</span>
                            <span className={styles.card__views}>{data.views} Views</span>
                        </div>
                    <p className={styles.card__summary}>
                        {data.text}
                    </p>
                </div>
            </>

    )
}

export default CardItem;