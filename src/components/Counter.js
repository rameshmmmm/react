import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from "../store/counterSlice";

const Counter = () => {
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  }
  // automatically subscribes to the data and re-renders the component when changed.
  const counter = useSelector(state=>state.counter.counter);
  const showCounter = useSelector(state=>state.counter.showCounter);
  
  const dispatch = useDispatch();

  const incrementHandler = (val) => {
    dispatch(counterActions.increment(val));
  };
  
  const decrementHandler = (val) => {
    dispatch(counterActions.decrement(val));
  };

  return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={()=>incrementHandler(5)}>Increment by 5</button>
				<button onClick={decrementHandler}>Decrement</button>
				<button onClick={()=>decrementHandler(5)}>Decrement by 5</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
  );
};

export default Counter;
