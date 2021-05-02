import React, { useState, useEffect } from "react";
import styles from "./todaysDeals.module.css";
import VectorPRVS from "../../public/Media/Icons/Vectoryellow.svg";
import VectorNXT from "../../public/Media/Icons/Vectornext.svg";
import { addBasket } from "../../store/actions/basketAction";
import { connect } from "react-redux";
import Link from "next/link";
import axios from "axios";

const TodaysDeals = (props) => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const results = await axios.get("http://localhost:3002/data");
    console.log(results);
    setProducts(results.data);
  };

  useEffect(() => {
    getData();
  }, []);

  var [position, setPosition] = useState(-3.8);

  function nextbtn1() {
    if (position <= -83.64) {
      return;
    }

    setPosition((position -= 19.96));
  }

  function previousbtn1() {
    if (position >= -3.8) {
      return;
    }

    setPosition((position += 19.96));
  }

  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.previousbtn}>
          <VectorPRVS onClick={previousbtn1} />
        </div>

        <div className={styles.largeLayout}>
          <div
            className={styles.slider}
            style={{ transform: "translate(" + position + "%, 0 )" }}
          >
            {products.length &&
              products.map((product) => (
                <div className={styles.card} key={product.id.toString()}>
                  <Link href={"product_details/" + product.id}>
                    <div className={styles.imageCard}>
                      <img src={product.imageURL} width="100%" height="100%" />
                    </div>
                  </Link>
                  <div className={styles.waterMark}>
                    <div className={styles.title}>
                      <p>
                        <span className={styles.titleSpan}>
                          {product.title}
                        </span>
                      </p>
                      <button
                        className={styles.basketButton}
                        type="button"
                        onClick={() => {
                          props.addBasket(product);
                        }}
                      >
                        Add To Basket
                      </button>
                    </div>
                    <div className={styles.price}>
                      <p>
                        <span className={styles.priceSpan}>
                          {product.price + "$"}
                        </span>
                      </p>
                    </div>
                    <div className={styles.raiting}>
                      <p>
                        <span className={styles.raitingSpan}>5000 Sold</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className={styles.nextbtn}>
          <VectorNXT onClick={nextbtn1} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.product,
    baskets: state.basket,
  };
};

const mapDispatchToProps = { addBasket };

export default connect(mapStateToProps, mapDispatchToProps)(TodaysDeals);
