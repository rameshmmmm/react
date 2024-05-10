import { createStore } from 'redux';

const counterReducer = (
	state = { counter: 0 },
	action = { type: "default" }
) => {
	const actions = {
		increment: { counter: state.counter + 1 },
		decrement: { counter: state.counter - 1 },
	};
	return actions[action.type] || state;
};

const store = createStore(counterReducer);

export default store;
