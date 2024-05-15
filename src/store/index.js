import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import cartTogglerReducer from "./cartTogglerSlice";
import notificationReducer from "./notificationSlice";

const store = configureStore({
    reducer: { cart: cartReducer, cartToggler: cartTogglerReducer, notification: notificationReducer },
});

export default store;