
import { TCard } from '../../types'
import { FC, useState, useEffect } from 'react';
import Modal from '../Modal/Modal';
import CardItem from '../cardItem/CardItem'
import Skeleton from '../skeleton/Skeleton'
import styles from './CardList.module.scss'

interface IList {
    cards: TCard[],
    loading: boolean,
    error: string | null,
    isOpenedModal: boolean,
    setIsOpenedModal: (isOpenedModal: boolean) => void
}


const CardList: FC<IList> = ({cards, loading, error, isOpenedModal, setIsOpenedModal}) => {

    const [ showSkeleton, setShowSkeleton ] = useState(true);
    const [ openCardIndex, setOpenCardIndex ] = useState<number | null>(null);


    const handleCardClick = (index: number) => {
        setOpenCardIndex(index);
        setIsOpenedModal(true)
    };

    const handleCloseModal = () => {
        setOpenCardIndex(null);
        setIsOpenedModal(false)
      };


    useEffect(() => {
        let timeoutId: number | null = null;

        if (!loading) {
            timeoutId = setTimeout(() => {
                setShowSkeleton(false);
            }, 2000);
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };

    }, [loading])

    return (
            <section className={styles.cards}>
                <div className={`wrapper ${styles.cards__wrapper}`}>
                    {loading || showSkeleton && ([...new Array(9)].map((_, i) => <Skeleton key={i}/>))}
                    {(!error && !loading && !showSkeleton && cards && cards.length !== 0) 
                        && (cards.map((item: TCard, i: number) => {
                            
                            return (
                              <CardItem
                                key={`${item.title} + ${i}`}
                                data={item}
                                isOpenedModal={isOpenedModal}
                                handleCardClick={() => handleCardClick(i)}
                              />
                            );
                          }))                    
                            
                    }
                    {(!error && !loading && !showSkeleton && cards?.length === 0) && (
                        <h2>Posts were not found</h2>
                    )}

                {openCardIndex !== null 
                &&  <Modal 
                        isOpenedModal={isOpenedModal}
                        setIsOpenedModal={handleCloseModal}
                    >
                        { cards[openCardIndex] &&
                                <>
                                    <img src={cards[openCardIndex].img} 
                                        loading="lazy" 
                                        srcSet={`${cards[openCardIndex].img_2x} 2x`} 
                                        alt={cards[openCardIndex].title} 
                                        className={styles.modal__img} 
                                    />
                                        <p className={styles.modal__category}>{cards[openCardIndex].tags}</p>
                                        <h3 className={styles.modal__title}>{cards[openCardIndex].title}</h3>
                                        <div className={styles.modal__info}>
                                            <span className={styles.modal__author}>{cards[openCardIndex].autor}</span>
                                            <span className={styles.modal__date}>{cards[openCardIndex].date}</span>
                                            <span className={styles.modal__views}>{cards[openCardIndex].views} Views</span>
                                        </div>
                                    <p className={styles.modal__summary}>
                                        {cards[openCardIndex].text}
                                    </p>
                                </>

                        }
                </Modal>}

                </div>
            </section>
    )
}

export default CardList