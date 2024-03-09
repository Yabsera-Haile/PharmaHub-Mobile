import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        removeFromCart: (state, action) => {
            let newCart = [...state.items];
            const index = state.items.findIndex((item) => item.id === action.payload.id);
                if (index >= 0) {
                        newCart.splice(index, 1);
                } else {
                        console.log(`Cant remove product (id: ${action.payload.id}) as its not in cart!`);
                }
                state.items = newCart;
        },
        emptyCart: (state, action) => {
         state.items = [];
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectCartItemsById = (state, id) => state.cart.items.filter((item) => item.id === id);

export const selectCartTotal = state => state.cart.items.reduce((total, item) => total + item.price, 0);

export default cartSlice.reducer;
