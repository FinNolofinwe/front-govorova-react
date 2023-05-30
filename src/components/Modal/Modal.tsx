import { ReactNode, FC } from 'react';
import Portal from '../portal/Portal';
import styles from './Modal.module.scss';

interface IModal {
    isOpenedModal: Boolean,
    setIsOpenedModal: (isOpenedModal: boolean) => void,
    children: ReactNode
}

const Modal: FC<IModal> = ({isOpenedModal, setIsOpenedModal, children}) => {

    if (!isOpenedModal) return null;
    const wrapperStyle = isOpenedModal 
                            ? `${styles.modal__wrapper + ' ' + styles.modal__wrapper__showed}`
                            :   `${styles.modal__wrapper}`

    return (
        <>
            <Portal wrapperId="react-portal-modal-container">
                {isOpenedModal 
                && (<div 
                        onClick={() => setIsOpenedModal(false)} 
                        className={wrapperStyle}
                    >
                        <div className={styles.modal}>
                            <div 
                                onClick={() => setIsOpenedModal(false)}  
                                className={styles.modal__close}
                            >
                                <span className={styles.modal__close__line}></span>
                                <span className={styles.modal__close__line}></span>
                            </div>
                            <div className={styles.modal__content}>
                                {children}
                            </div>
                        </div>
                    </div>)}
            </Portal>
        </>
    )
}

export default Modal