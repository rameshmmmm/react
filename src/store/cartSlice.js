import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { cartItems: [], totalQuantity: 0, isDBSync: false };

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        replaceCart (state, action) {
            console.log(action.payload);
            state.cartItems = action.payload.cartItems || [];
            state.totalQuantity = action.payload.totalQuantity;
            state.isDBSync = true;
        },
        addToCart (state, action) {
            const itemToAdd = action.payload;
            const item = state.cartItems.find(
				(cartItem) => cartItem?.id === itemToAdd?.id
			);
            if (item) {
                item.quantity++;
                item.totalPrice += itemToAdd.price;
            } else {
                state.cartItems.push({
					...itemToAdd,
					quantity: 1,
                    totalPrice: itemToAdd.price,
				});
            }
            state.isDBSync = false;
            ++state.totalQuantity;
        },
        removeFromCart (state, action) {
            const itemToRemoveId = action.payload;
            const item = state.cartItems.find(
				(cartItem) => cartItem?.id === itemToRemoveId
			);
            if (item.quantity > 1) {
                item.quantity--;
                item.totalPrice -= item.price;
            } else {
                state.cartItems = state.cartItems.filter(
					(cartItem) => cartItem.id !== itemToRemoveId
				);
            }
            --state.totalQuantity;
            state.isDBSync = false;
        }
    }
});

export default cartSlice.reducer;

export const cartActions = cartSlice.actions;