import React from "react";
import Header from "../../Components/Header/Header";
import { connect, useSelector, useDispatch } from "react-redux";
import styles from "./basket.module.css";
import {deleteBasket} from '../../store/actions/basketAction'

const BasketProduct = (props) => {

    useSelector(state => state)
    const dispatch = useDispatch()


  console.log(props.baskets);
  return (
    <>
      <Header />

      {Object.values(props.baskets).map((basket, i) => (
        <div className={styles.largeCard} key={i}>
          <div className={styles.imageCard}>
            <img className={styles.image} src={basket.imageURL} />
          </div>
          <div className={styles.mediumCard}>
            <div className={styles.title}>
              <span>{basket.title}</span>
            </div>
            <div className={styles.specification}>
              <div className={styles.color}>
                <span>Color: Black</span>
              </div>
              <div className={styles.shipsFrom}>
                <span>Ships From: Azerbaijan</span>
              </div>
              <div className={styles.onePrice}>
                <span>Price:{basket.price + "$"}</span>
              </div>
            </div>
            <div className={styles.quantityPrice}>
              <div className={styles.quantity}>
                <span>Quantity:{basket.qty}</span>
              </div>
              <div className={styles.totalPrice}>
                <span>Total Price:{basket.qty * basket.price + "$"}</span>
              </div>
            </div>
            <div className={styles.recycle} onClick = {() => {dispatch(deleteBasket(basket))}}></div>
          </div>
          
        </div>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.product,
    baskets: state.basket,
  };
};



export default connect(mapStateToProps)(BasketProduct);
