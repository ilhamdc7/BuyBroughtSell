import React from 'react'
import styles from './SubHeader.module.css';



const SubHeader = () => {
    return (
        <div className={styles.SubHeader}>
            <div className={styles.submenu}>
            <ul>
                <li><a href='#' className={styles.categories}>CATEGORIES</a></li>
                <li><a href='#' className={styles.todaysoffers}>TODAY'S OFFERS</a></li> 
                <li><a href='#' className={styles.browsinghistory}>BROWSING HISTORY</a></li>
                <li><a href='#' className={styles.youmightlike}>YOU MIGHT LIKE</a></li>
            </ul>
            </div>
            
            
        </div>
    )
}

export default SubHeader



