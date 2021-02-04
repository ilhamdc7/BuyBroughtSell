import React from 'react';
import styles from './header.module.css'
import Message from '../../public/Media/Icons/Message.svg'
import SearchBar from "./SearchBar";
import InputVoice from "./InputVoice";


function Header(props) {
    return (
        <div className={styles.header}>
            <div className={styles.message}>
                <Message/>

            </div>

            <div className={styles.srcbar}>
                <SearchBar/>
            </div>

            <div className={styles.inptvoice}>
                <InputVoice/>
            </div>

        </div>

    );
}

export default Header;
