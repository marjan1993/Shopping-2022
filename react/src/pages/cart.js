import React, { Component } from "react";
import { Cart } from "../components/cart/";
import { cartStore } from "../components/product";

export class CartPage extends Component {
  state = {};
  componentDidMount() {
    this.setState({ products: cartStore.getState().cart });
    this.unsubscribe = cartStore.subscribe(() =>
      this.setState({ products: cartStore.getState().cart })
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="mt-5">
        <Cart products={this.state.products} />
      </div>
    );
  }
}
