import React, { useEffect, useState } from "react";
import {
  cartStore,
  removeFromCart,
  addToCart,
  qauntityDown,
  productService,
} from "../product";
import Popup from "./pop-up";

export function Cart({ products }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  if (!products || !products.length) {
    return (
      <div style={{ marginTop: 300, fontSize: 40 }} className="text-center">
        Cart is Empty!
      </div>
    );
  }

  const removeHandler = (product) => {
    cartStore.dispatch(removeFromCart(product));
  };

  const decrementHandler = (product) => {
    cartStore.dispatch(qauntityDown(product));
  };
  const incrementHandler = (product) => {
    cartStore.dispatch(addToCart(product));
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Pic</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <img alt={product.title} width="50" src={product.pic}></img>
              </td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <div className="input-group">
                  <button
                    onClick={() => decrementHandler(product)}
                    type="button"
                    className="input-group-text"
                  >
                    -
                  </button>
                  <div className="form-control text-center">
                    {product.quantity}
                  </div>

                  <button
                    onClick={() => incrementHandler(product)}
                    type="button"
                    className="input-group-text"
                  >
                    +
                  </button>
                </div>
              </td>
              <td>
                $
                {(
                  Number(product.price.replace(",", "").replace("$", "")) *
                  product.quantity
                ).toFixed(2)}
              </td>
              <td>
                <button
                  onClick={() => removeHandler(product)}
                  className="btn btn-danger"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input
          type="button"
          className="btn btn-success check-button "
          value="Check Out"
          onClick={togglePopup}
        />
        {isOpen && (
          <Popup
            content={
              <>
                <h4 className="text-center">Thank you for shopping</h4>
              </>
            }
            handleClose={togglePopup}
          />
        )}
      </div>
    </>
  );
}
