import React, { Component } from "react";
import { cartStore } from "../product";

export class CartIcon extends Component {
  state = {};

  componentDidMount() {
    this.setState({ count: cartStore.getState().cart.length });
    this.unsubscribe = cartStore.subscribe(() =>
      this.setState({ count: cartStore.getState().cart.length })
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <img alt="cart" width="30" src="/images/cart.png" />
        {this.state.count > 0 && (
          <span
            style={{ position: "absolute", marginTop: -5, marginLeft: -10 }}
            className="badge bg-danger rounded-circle"
          >
            {this.state.count}
          </span>
        )}
      </div>
    );
  }
}
