import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from "../store/counterSlice";

const Counter = () => {
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  }
  // automatically subscribes to the data and re-renders the component when changed.
  const counter = useSelector(state=>state.counter.counter);
  const showCounter = useSelector(state=>state.counter.showCounter);
  
  const dispatch = useDispatch();

  const incrementBy5Handler = () => {
    dispatch(counterActions.incrementByValue(5));
  }

  const decrementBy5Handler = () => {
    dispatch(counterActions.decrementByValue(5));
  }

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={incrementBy5Handler}>Increment by 5</button>
				<button onClick={decrementHandler}>Decrement</button>
				<button onClick={decrementBy5Handler}>Decrement by 5</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
  );
};

export default Counter;
