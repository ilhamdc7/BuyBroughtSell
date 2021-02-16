import React from "react";
import styles from "./MainContainer.module.css";
import ArrowRight from '../../public/Media/Icons/arrow-right.svg'
import Image from 'next/image'

const MainContainer = () => {
  return (
    <div className={styles.headContainer}>

      


        <div className={styles.largeCard}  >
          
       


        <img src="https://cdn-0.idownloadblog.com/wp-content/uploads/2020/05/Apple-Pride-2020-inspired-wallpaper-ar72014-idownloadblog-mockup.jpg"  className={styles.img}  />

         
          <div className={styles.waterMark}>

            
              <p><span className={styles.shortTitle}>Lorem Ipsum dolor sit amet, consectetur adipiscing elit.</span></p>
              <p><span className={styles.shortDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></p>
            <button className={styles.largeCardButton}>View All<ArrowRight style={{marginLeft:"15px"}}/> </button>

          </div>
      </div>






      <div className={styles.mediumContainer}>
        <div className={styles.mediumCard}>
          <img src="https://images.askmen.com/1080x540/2017/05/30-031916-terrible_watch_design.jpg" className={styles.img}/>
        </div>

        <div className={styles.smallestCard}>
          <img src='https://i.ebayimg.com/images/g/jJkAAOSw0PtfrJwN/s-l300.jpg' className={styles.img} />
        </div>

        <div className={styles.smallCard}>
        <img src='https://mechanicalkeyboards.com/shop/images/products/large_FC980MEPAPDOE_2.jpg' className={styles.img} />


          <div className={styles.waterMark2}>
          <button className={styles.smallCardButton}>$200 Shop Now <ArrowRight /></button>
          </div>
   
   
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
