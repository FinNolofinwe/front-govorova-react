
import { FC, ChangeEvent } from 'react';
import styles from './SearchBar.module.scss'

interface ISearchEvent {
    query: string,
    changeRequest: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: FC<ISearchEvent> = ({query, changeRequest}) => {
  return (
    <div className="wrapper">
        <input 
            type="search" 
            value={query}
            onChange={changeRequest}
            className={styles.inp}
            placeholder='Searching...'
        />
    </div>
  )
}

export default SearchBar