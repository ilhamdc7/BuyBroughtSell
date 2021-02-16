import React from 'react'
import styles from './SubHeader.module.css';
import Link from 'next/link'



const SubHeader = () => {
    return (
        <div className={styles.subHeader}>
           <p className={styles.subLink}><Link href='#'>CATEGORIES</Link></p>
           <p className={styles.subLink}><Link href='#'>TODAY'S OFFERS</Link></p>
           <p className={styles.subLink}><Link href='#'>BROWSING HISTORY</Link></p>
           <p className={styles.subLink}><Link href='#'>YOU MIGHT LIKE</Link></p>
           <p className={styles.subLink}><Link href='#'>FAVORITES</Link></p>
        </div>
    )
}

export default SubHeader



