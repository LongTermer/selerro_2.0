import React, { useContext, useCallback } from "react";
import "./checkout-item.styles.scss";
import { CartContext } from "../../providers/cart/cart.provider.jsx";
import { useMediaQuery } from "react-responsive";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  const memoizedRemoveItem = useCallback(() => removeItem(cartItem), [
    removeItem,
    cartItem,
  ]);

  const memoizedAddItem = useCallback(() => addItem(cartItem), [
    addItem,
    cartItem,
  ]);

  const memoizedClearItemFromCart = useCallback(
    () => clearItemFromCart(cartItem),
    [clearItemFromCart, cartItem]
  );

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name name-media">{name}</span>
      <span className="quantity">
        <div className="arrow left-arrow" onClick={memoizedRemoveItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={memoizedAddItem}>
          &#10095;
        </div>
      </span>
      <span className="price price-media">{price}</span>
      {isMobile ? (
        <div
          className="remove-button"
          onClick={memoizedClearItemFromCart}
          style={{
            position: "relative",
            right: "25px",
          }}
        >
          &#10005;
        </div>
      ) : (
        <div className="remove-button" onClick={memoizedClearItemFromCart}>
          &#10005;
        </div>
      )}
    </div>
  );
};

export default CheckoutItem;
