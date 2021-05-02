import React, {useState} from "react";
import Message from "../../public/Media/Icons/Message.svg";
import SearchIcon from "../../public/Media/Icons/cil_search.svg";
import InputVoice from "../../public/Media/Icons/InputVoice.svg";
import Basket from "../../public/Media/Icons/Basket.svg";
import Dollar from "../../public/Media/Icons/$.svg";
import Vector from "../../public/Media/Icons/Vector.svg";
import Usa from "../../public/Media/Icons/usa.svg";
import Aze from "../../public/Media/Icons/aze.svg";
import Rus from "../../public/Media/Icons/rus.svg";
import Spain from "../../public/Media/Icons/spain.svg";
import Turkey from "../../public/Media/Icons/tr.svg";
import India from "../../public/Media/Icons/india.svg";
import China from "../../public/Media/Icons/china.svg";
import Poland from "../../public/Media/Icons/pln.svg";
import SubHeader from "../SubHeader/SubHeader";
import styles from './header.module.css'
import Link from 'next/link'

function Header() {
  const [showlng, setShowlng] = useState(false);
  const [showcurrency, setShowcurrency] = useState(false);

  function toggle() {
    setShowlng(!showlng);
  }



  function allInOne() {
    setShowlng(false);
    ccurrency();
  }

  function allInOne2() {
    setShowcurrency(false);
    toggle();
  }

  function ccurrency() {
    setShowcurrency(!showcurrency);
  }

  return (
    <div>
      <div className={styles.header}>

        <div className={styles.firstRow}></div>

        <div className={styles.secondRow}>


        <div className={styles.search}>
          <input
            className={styles.int}
            placeholder={"All you need are here..."}
            type={"text"}
          />

          <div className={styles.searchIcon}>
            <SearchIcon />
          </div>
        </div>

          <div className={styles.inptVoice}>
            <InputVoice/>
          </div>


        </div>
        <div className={styles.thirdRow}>
          <Link href="/basket">
          <div className={styles.basket}>
            <Basket/>
          </div>
          </Link>
          <a className={styles.sign} href="#">
            Sign In
          </a>

          <div className={styles.showCurrencyTop}>
            <div
                className={styles.showCurrency}
            style={{ display: showcurrency ? "block" : "none" }}
          >
            <ul>
              <li>
                <Usa />
                <span>  USD</span>
              </li>
              <li>
                <Aze />
                <span>AZN</span>
              </li>
              <li>
                <Rus />
                <span>   RUB</span>
              </li>
              <li>
                <Spain />
               <span> EUR</span>
              </li>
              <li>
                <Turkey />
                <span> TL</span>
              </li>
              <li>
                <India />
                <span>  INR</span>
              </li>
              <li>
                <China />
                <span>CYN</span>
              </li>
              <li>
                <Poland />
                <span>  PLN</span>
              </li>
            </ul>
          </div>
          {/*ToDo  1 div yarat ona OnClik ver*/}
          <div className={styles.currency} onClick={allInOne}>
            <Dollar />
          </div>

          <div className={styles.vectorCurrency} onClick={allInOne}>
            <Vector />
          </div>
        </div>

        <div className={styles.topLanguage}>
          <div className={styles.language} onClick={allInOne2}>
            <ul>
              <li>En</li>
            </ul>

            <div
              className={styles.showLanguage}
              style={{ display: showlng ? "block" : "none" }}
            >
              <ul>
                <li>
                  <a href="#">En</a>
                </li>
                <li>
                  <a href="#">Ru</a>
                </li>
                <li>
                  <a href="#">AZ</a>
                </li>
                <li>
                  <a href="#">TR</a>
                </li>
                <li>
                  <a href="#">ES</a>
                </li>
                <li>
                  <a href="#">Pl</a>
                </li>
                <li>
                  <a href="#">IN</a>
                </li>
                <li>
                  <a href="#">ZH</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.vectorLanguage}>
            <Vector onClick={allInOne2}/>
          </div>
        </div>

          <div className={styles.message}>
            <Message/>
          </div>
        </div>
      </div>
      <div>
        <SubHeader className={styles.Subheader}/>
      </div>
    </div>
  );
}

export default Header;
