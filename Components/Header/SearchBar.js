import React from "react";
import styles from './SearchBar.module.css'
import SearchIcon from '../../public/Media/Icons/cil_search.svg'



function SearchBar() {
    return (

        <div className={styles.search}>
            <input className={styles.int} placeholder={"All you need are here..."} type={"text"}/>


            <div className={styles.SearchIcon}>
                <SearchIcon />

            </div>

        </div>


    )
}

export default SearchBar