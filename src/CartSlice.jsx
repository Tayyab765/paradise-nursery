import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // each item: { name, image, cost, quantity }
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
    incrementQuantity: (state, action) => {
      const itemToUpdate = state.items.find((item) => item.name === action.payload);
      if (itemToUpdate) {
        itemToUpdate.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const itemToUpdate = state.items.find((item) => item.name === action.payload);
      if (itemToUpdate) {
        if (itemToUpdate.quantity > 1) {
          itemToUpdate.quantity--;
        } else {
          state.items = state.items.filter((item) => item.name !== action.payload);
        }
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
