import { createSlice } from "@reduxjs/toolkit";

const initialCartTogglerState = { showCart: 0 };

const cartTogglerSlice = createSlice({
    name: "cartToggler",
    initialState: initialCartTogglerState,
    reducers: {
        toggle (state) {
            state.showCart = !state.showCart;
        },
    }
});

export default cartTogglerSlice.reducer;

export const cartTogglerActions = cartTogglerSlice.actions;