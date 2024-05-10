import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  }
  // automatically subscribes to the data and re-renders the component when changed.
  const counter = useSelector(state=>state.counter);
  const showCounter = useSelector(state=>state.showCounter);
  
  const dispatch = useDispatch();

  const incrementBy5Handler = () => {
    dispatch({ type: "increment", value: 5});
  }

  const decrementBy5Handler = () => {
    dispatch({ type: "decrement", value: 5});
  }

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
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
