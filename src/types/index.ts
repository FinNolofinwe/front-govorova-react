export type TCard = {
    autor: string,
    date: string,
    img: string,
    img_2x: string,
    tags: string,
    text: string,
    title: string,
    views: string,
}

export type TCardsResponse = {
    data: TCard[]
}

export type TLink = {
    href: string,
    name: string,
    subnav?: boolean
}

export type TIsOpened = {
    isOpenedMenu?: boolean,
    setIsOpenedMenu?: (isOpened: boolean) => void,
    ref?: HTMLElement | null,
    isNarrowScreen?: boolean
}

export type TSearching = {
    cards: TCard[],
    query: string
}
