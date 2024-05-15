import axios from "axios";
import { notificationActions } from "./notificationSlice";
import { cartActions } from "./cartSlice";
import { FIREBASE_ENDPOINT } from "../constants";

export const getCartDataThunk = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(FIREBASE_ENDPOINT);
            if (!response.status === 200 || !response.statusText === 'OK') {
                throw new Error();
            }
            dispatch(cartActions.replaceCart(response.data));
        } catch (e) {
            dispatch(notificationActions.showNotification({
                status: "error",
                title: "Error!",
                message: "Get data operation failed.",
            }));
        }
    };
};

export const saveCartDataThunk = (cartData) => {
    return async (dispatch) => {
        dispatch(notificationActions.showNotification({
            status: "pending",
            title: "Sending...",
            message: "Saving cart data...",
        }));
        try {
            const response = await axios.put(FIREBASE_ENDPOINT, cartData);
            if (!response.ok) {
                throw new Error();
            }
            dispatch(notificationActions.showNotification({
                status: "success",
                title: "Success!",
                message: "Save data operation success.",
            }));
        }
        catch (e) {
            dispatch(notificationActions.showNotification({
                status: "error",
                title: "Error!",
                message: "Save data operation failed.",
            }));
        }
    };
}