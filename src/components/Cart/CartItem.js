import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cartSlice';

const CartItem = (props) => {
  const { title, quantity, totalPrice, price } = props.item;
  const dispatch = useDispatch();

  const quantityReductionHandler = () => {
      dispatch(cartActions.removeFromCart(props.item?.id));
  };

  const quantityExpansionHandler = () => {
    dispatch(cartActions.addToCart(props.item));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={quantityReductionHandler}>-</button>
          <button onClick={quantityExpansionHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
