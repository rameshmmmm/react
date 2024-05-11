import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
	name: "counter",
	initialState: initialCounterState,
	reducers: {
		increment(state, action) {
			state.counter += !isNaN(action.payload) ? action.payload : 1;
		},
		decrement(state, action) {
			state.counter -= !isNaN(action.payload) ? action.payload : 1;
		},
	},
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;