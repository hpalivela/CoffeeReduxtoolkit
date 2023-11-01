import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartDetails",
  initialState: {
    cart: JSON.parse(localStorage.getItem("cartItems")) || [],
  },
  reducers: {
    addCart: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.cart.findIndex((item) => item.id === id);

      if (itemIndex === -1) {
        state.cart.push({ ...action.payload, quantity: 1 });
      localStorage.setItem('cartItems',JSON.stringify(state.cart))
      } else {
        state.cart[itemIndex].quantity += 1;
      localStorage.setItem('cartItems',JSON.stringify(state.cart))
      }
    },
    increaseQuantity: (state, action) => {
        const itemInd = state.cart.findIndex(item => item.id === action.payload)
        state.cart[itemInd].quantity+=1;
        // const newItems = state.cart.map((item)=>
        // item.id === action.payload ? item.quantity+1 : item)
        // state.cart = newItems
      localStorage.setItem('cartItems',JSON.stringify(state.cart))
      },
      
    decreaseQuantity: (state, action) => {
        const itemInd = state.cart.findIndex(item => item.id === action.payload)
        state.cart[itemInd].quantity-=1;
      localStorage.setItem('cartItems',JSON.stringify(state.cart))

    },
    RemoveItem: (state, action) => {
     
      const newItems = state.cart.filter((item) => item.id !== action.payload);
      state.cart = newItems
      localStorage.setItem('cartItems',JSON.stringify(state.cart))

    },
  },
});

export const {
  addCart,
  increaseQuantity,
  decreaseQuantity,
  RemoveItem,
} = cartSlice.actions;
export default cartSlice.reducer;
