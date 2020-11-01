import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import { connect } from 'react-redux'
import { addToCart, loadCurrentItem } from '../../../redux/shopping/actions';


const Product = ({ product, addToCart, loadCurrentItem }) => {
  // console.log("ItemLoads", product.image)
  
  return (
    <div className={styles.product}>
      <img className={styles.product__image} src={product.image} alt="" />

      <div className={styles.product__details}>
        <p className={styles.details__title}>{ product.title } ok</p>
        <p className={styles.details__desc}>{ product.description }</p>
        <p className={styles.details__price}>$ { product.price }</p>
      </div>

      <div className={styles.product__buttons}>
        <Link to={`/product/${product.id}`}>
          <button 
            className={`${styles.buttons__btn} ${styles.buttons__view}`}
            onClick={() => loadCurrentItem(product)}
            >
            View Item
          </button>
        </Link>
        <button 
          onClick={() => addToCart(product.id)}
          className={`${styles.buttons__btn} ${styles.buttons__add}`}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
  }
}

export default connect(null, mapDispatchToProps)(Product);
