import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };
const counterReducer = (state = initialState, action) => {
	const actions = {
		increment: { ...state, counter: state.counter + (action.value || 1)},
		decrement: { ...state, counter: state.counter - (action.value || 1)},
		toggle: { ...state, showCounter: !state.showCounter }
	};
	return actions[action.type] || state;
};

const store = createStore(counterReducer);

export default store;
