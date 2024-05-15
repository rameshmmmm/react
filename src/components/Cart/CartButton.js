import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartTogglerActions } from '../../store/cartTogglerSlice';

const CartButton = (props) => {

  const totalQuantity = useSelector(state=>state.cart.totalQuantity);

  const dispatch = useDispatch();

  const cartTogglerHandler = () => {
    dispatch(cartTogglerActions.toggle());
  };

  return (
    <button onClick={cartTogglerHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity || 0}</span>
    </button>
  );
};

export default CartButton;
