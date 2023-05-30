
import { FC, useState, ChangeEvent, useMemo, useEffect, useRef, RefObject } from "react";

import Header from '../header/Header';
import Navigation from '../navigation/Navigation';
import CardList from "../cardList/CardList";
import SearchBar from "../searchBar/SearchBar";
import StickyNavigation from "../stickyNavigation/StickyNavigation";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import { useMatchMedia } from '../../hooks/useMatchMedia';
import { useGetCards } from "../../hooks/useQuerries";

import { TCard } from "../../types";

interface IResult {
    cards: TCard[] | null,
    loading: boolean,
    error: string | null
}

const App: FC = () => {

    const [query, setQuery] = useState('')
    const [ isOpenedMenu, setIsOpenedMenu ] = useState(false)
    const [ isOpenedModal, setIsOpenedModal ] = useState(false)
    const scrollElem: RefObject<HTMLDivElement> = useRef(null);

    let {cards, loading, error}: IResult = useGetCards()
    const { isNarrowScreen } = useMatchMedia();

    const changeRequest = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const foundedCards = useMemo(() => {
        let result = query 
                        ? cards?.filter(card => card.title.toLowerCase().includes(query.toLowerCase()) 
                                             || card.text.toLowerCase().includes(query.toLowerCase())
                                             )
                        : cards
        return result || [] 
    }, [query, cards]);

    useEffect(() => {
        const scrollWidth = getComputedStyle(scrollElem.current!).width
        if (isOpenedModal) {
            document.body.style.cssText = `overflow-y: hidden; position: fixed; top: -${scrollY}px; paddingRight: ${scrollWidth + 5}px`;
        } else {
            document.body.style.cssText = "overflow-y: initial; position: initial;";
        }

        return () => {
            document.body.style.cssText = "overflow-y: initial; position: initial;";
        };

      }, [isOpenedModal]);


    return (
        <>  
            <div ref={scrollElem} className="scroll-fix"></div>
            <Header 
                isOpenedMenu={isOpenedMenu} 
                setIsOpenedMenu={setIsOpenedMenu}
            />
            {isNarrowScreen 
            ? (
                <Navigation 
                    setIsOpenedMenu={setIsOpenedMenu} 
                    isOpenedMenu={isOpenedMenu} 
                    isNarrowScreen={isNarrowScreen} 
                />
            )
            : 
                <StickyNavigation isOpenedModal={isOpenedModal}>
                    <Navigation
                        isNarrowScreen={isNarrowScreen}
                    />
                </StickyNavigation>
        }
            <div className="main">
                <SearchBar query={query} changeRequest={changeRequest}/>
                <ErrorBoundary error={error}>
                    <CardList 
                        cards={foundedCards} 
                        loading={loading} 
                        error={error}
                        isOpenedModal={isOpenedModal}
                        setIsOpenedModal={setIsOpenedModal}
                    />
                </ErrorBoundary>
            </div>
            {isNarrowScreen && <div 
                className={(isOpenedMenu 
                    ? `layout__wrapper layout__wrapper-active`
                    : `layout__wrapper`
                )}>
            </div>}
            
        </>
    )
}

export default App