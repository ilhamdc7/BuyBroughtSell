import React from 'react'
import styles from './SubHeader.module.css';
import Link from 'next/link'



const SubHeader = () => {
    return (
        <div className={styles.subHeader}>
           <p className={styles.categories}><Link href='#'>CATEGORIES</Link></p>
           <p className={styles.todaysOffers}><Link href='#'>TODAY'S OFFERS</Link></p>
           <p className={styles.browsingHistory}><Link href='#'>BROWSING HISTORY</Link></p>
           <p className={styles.youMightLike}><Link href='#'>YOU MIGHT LIKE</Link></p>
            
            
        </div>
    )
}

export default SubHeader



