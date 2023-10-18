import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const courseIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (courseIndex >= 0) {
        toast.info("Course already in cart");
        return;
      } else {
        state.cartItems.push(action.payload);
        toast.success(
          `${
            action.payload.name.length > 10
              ? action.payload.name.slice(0, 10) + "..."
              : action.payload.name
          }  has been added to cart`
        );
      }
      console.log(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem._id !== action.payload._id
      );
      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error(
        `${
          action.payload.name.length > 10
            ? action.payload.name.slice(0, 10) + "..."
            : action.payload.name
        }  removed from cart`
      );
    },
    getTotal(state, action) {
      const total = state.cartItems.reduce((accumulator, cartItem) => {
        const itemTotal = cartItem.price; // Get the price of the course
        return accumulator + itemTotal;
      }, 0);

      state.cartTotalAmount = total;
    },
  },
});

export const { addToCart, removeFromCart, getTotal } = cartSlice.actions;

export default cartSlice.reducer;
