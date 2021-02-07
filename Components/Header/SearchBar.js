import React from "react";
import styles from "./SearchBar.module.css";
import SearchIcon from "../../public/Media/Icons/cil_search.svg";
import InputVoice from "../../public/Media/Icons/InputVoice.svg";
import Basket from '../../public/Media/Icons/Basket.svg'
import Dollar from '../../public/Media/Icons/$.svg'
import Vector from '../../public/Media/Icons/Vector.svg'

function SearchBar() {
  return (
    <>
      <div className={styles.search}>
        <input
          className={styles.int}
          placeholder={"   All you need are here..."}
          type={"text"}
        />

        <div className={styles.SearchIcon}>
          <SearchIcon />
        </div>
      </div>

      <div className={styles.inptvoice}>
        <InputVoice />
      </div>
      <div className={styles.basket}>
        <Basket />
      </div>
      <a className={styles.sign} href='#'>Sign In</a>
      <div className={styles.currency}>
        <Dollar/>
      </div>
      <div className={styles.vectorcurrency}>
      <Vector/>
      </div>
      <div className={styles.language}>
          <ul>
              <li>En</li>
          </ul>
      </div>
      <div className={styles.vectorlanguage}>
      <Vector/>
      </div>
    </>
  );
}

export default SearchBar;
