import { ADD_TO_CART, REMOVE_FROM_CART, QUANTITY_DOWN } from "./actions";

export function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        return state.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        });
      }
      action.payload.quantity = 1;
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload.id);
    case QUANTITY_DOWN:
      const productItem = state.find((item) => item.id === action.payload.id);
      if (productItem.quantity > 1) {
        return state.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          }
          return product;
        });
      }
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
}
